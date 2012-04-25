/*
* Copyright 2007 ZXing authors
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
using System;
namespace com.google.zxing.qrcode.decoder
{
	
	/// <summary> <p>Encapsulates a block of data within a QR Code. QR Codes may split their data into
	/// multiple blocks, each of which is a unit of data and error-correction codewords. Each
	/// is represented by an instance of this class.</p>
	/// 
	/// </summary>
	/// <author>  Sean Owen
	/// </author>
	/// <author>www.Redivivus.in (suraj.supekar@redivivus.in) - Ported from ZXING Java Source 
	/// </author>
	sealed class DataBlock
	{
		internal int NumDataCodewords
		{
			get
			{
				return numDataCodewords;
			}
			
		}
		internal sbyte[] Codewords
		{
			get
			{
				return codewords;
			}
			
		}
		
		//UPGRADE_NOTE: Final was removed from the declaration of 'numDataCodewords '. "ms-help://MS.VSCC.v80/dv_commoner/local/redirect.htm?index='!DefaultContextWindowIndex'&keyword='jlca1003'"
		private int numDataCodewords;
		//UPGRADE_NOTE: Final was removed from the declaration of 'codewords '. "ms-help://MS.VSCC.v80/dv_commoner/local/redirect.htm?index='!DefaultContextWindowIndex'&keyword='jlca1003'"
		internal sbyte[] codewords;
		
		private DataBlock(int numDataCodewords, sbyte[] codewords)
		{
			this.numDataCodewords = numDataCodewords;
			this.codewords = codewords;
		}
		
		/// <summary> <p>When QR Codes use multiple data blocks, they are actually interleaved.
		/// That is, the first byte of data block 1 to n is written, then the second bytes, and so on. This
		/// method will separate the data into original blocks.</p>
		/// 
		/// </summary>
		/// <param name="rawCodewords">bytes as read directly from the QR Code
		/// </param>
		/// <param name="version">version of the QR Code
		/// </param>
		/// <param name="ecLevel">error-correction level of the QR Code
		/// </param>
		/// <returns> {@link DataBlock}s containing original bytes, "de-interleaved" from representation in the
		/// QR Code
		/// </returns>
		internal static DataBlock[] getDataBlocks(sbyte[] rawCodewords, Version version, ErrorCorrectionLevel ecLevel)
		{
			
			if (rawCodewords.Length != version.TotalCodewords)
			{
				throw new Exception("ArgumentException");
			}
			
			// Figure out the number and size of data blocks used by this version and
			// error correction level
			ECBlocks ecBlocks = version.getECBlocksForLevel(ecLevel);
			
			// First count the total number of data blocks
			int totalBlocks = 0;
			ECB[] ecBlockArray = ecBlocks.getECBlocks();
			for (int i = 0; i < ecBlockArray.Length; i++)
			{
				totalBlocks += ecBlockArray[i].Count;
			}
			
			// Now establish DataBlocks of the appropriate size and number of data codewords
			DataBlock[] result = new DataBlock[totalBlocks];
			int numResultBlocks = 0;
			for (int j = 0; j < ecBlockArray.Length; j++)
			{
				ECB ecBlock = ecBlockArray[j];
				for (int i = 0; i < ecBlock.Count; i++)
				{
					int numDataCodewords = ecBlock.DataCodewords;
					int numBlockCodewords = ecBlocks.ECCodewordsPerBlock + numDataCodewords;
					result[numResultBlocks++] = new DataBlock(numDataCodewords, new sbyte[numBlockCodewords]);
				}
			}
			
			// All blocks have the same amount of data, except that the last n
			// (where n may be 0) have 1 more byte. Figure out where these start.
			int shorterBlocksTotalCodewords = result[0].codewords.Length;
			int longerBlocksStartAt = result.Length - 1;
			while (longerBlocksStartAt >= 0)
			{
				int numCodewords = result[longerBlocksStartAt].codewords.Length;
				if (numCodewords == shorterBlocksTotalCodewords)
				{
					break;
				}
				longerBlocksStartAt--;
			}
			longerBlocksStartAt++;
			
			int shorterBlocksNumDataCodewords = shorterBlocksTotalCodewords - ecBlocks.ECCodewordsPerBlock;
			// The last elements of result may be 1 element longer;
			// first fill out as many elements as all of them have
			int rawCodewordsOffset = 0;
			for (int i = 0; i < shorterBlocksNumDataCodewords; i++)
			{
				for (int j = 0; j < numResultBlocks; j++)
				{
					result[j].codewords[i] = rawCodewords[rawCodewordsOffset++];
				}
			}
			// Fill out the last data block in the longer ones
			for (int j = longerBlocksStartAt; j < numResultBlocks; j++)
			{
				result[j].codewords[shorterBlocksNumDataCodewords] = rawCodewords[rawCodewordsOffset++];
			}
			// Now add in error correction blocks
			int max = result[0].codewords.Length;
			for (int i = shorterBlocksNumDataCodewords; i < max; i++)
			{
				for (int j = 0; j < numResultBlocks; j++)
				{
					int iOffset = j < longerBlocksStartAt?i:i + 1;
					result[j].codewords[iOffset] = rawCodewords[rawCodewordsOffset++];
				}
			}
			return result;
		}
	}
}