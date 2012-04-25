/*
* Copyright 2008 ZXing authors
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
using BarcodeFormat = com.google.zxing.BarcodeFormat;
//using ReaderException = com.google.zxing.ReaderException;
using Result = com.google.zxing.Result;
using BinaryBitmap = com.google.zxing.BinaryBitmap;
using BitArray = com.google.zxing.common.BitArray;
namespace com.google.zxing.oned
{
	
	/// <summary> <p>Implements decoding of the UPC-A format.</p>
	/// 
	/// </summary>
	/// <author>  dswitkin@google.com (Daniel Switkin)
	/// </author>
	/// <author>  Sean Owen
	/// </author>
	/// <author>www.Redivivus.in (suraj.supekar@redivivus.in) - Ported from ZXING Java Source 
	/// </author>
	public sealed class UPCAReader:UPCEANReader
	{
		override internal BarcodeFormat BarcodeFormat
		{
			get
			{
				return BarcodeFormat.UPC_A;
			}
			
		}
		
		//UPGRADE_NOTE: Final was removed from the declaration of 'ean13Reader '. "ms-help://MS.VSCC.v80/dv_commoner/local/redirect.htm?index='!DefaultContextWindowIndex'&keyword='jlca1003'"
		private UPCEANReader ean13Reader = new EAN13Reader();
		
		public override Result decodeRow1(int rowNumber, BitArray row, int[] startGuardRange, System.Collections.Generic.Dictionary<object, object> hints)
		{
			return maybeReturnResult(ean13Reader.decodeRow1(rowNumber, row, startGuardRange, hints));
		}
		
		public override Result decodeRow2(int rowNumber, BitArray row, System.Collections.Generic.Dictionary<object, object> hints)
		{
			return maybeReturnResult(ean13Reader.decodeRow2(rowNumber, row, hints));
		}
		
		public override Result decode1(BinaryBitmap image)
		{
			return maybeReturnResult(ean13Reader.decode1(image));
		}
		
		public override Result decode2(BinaryBitmap image, System.Collections.Generic.Dictionary<object, object> hints)
		{
			return maybeReturnResult(ean13Reader.decode2(image, hints));
		}
		
		protected internal override int decodeMiddle(BitArray row, int[] startRange, System.StringBuilder resultString)
		{
			return ean13Reader.decodeMiddle(row, startRange, resultString);
		}
		
		private static Result maybeReturnResult(Result result)
		{
			System.String text = result.Text;
			if (text.CharAt(0) == '0')
			{
				return new Result(text.Substr(1), null, result.ResultPoints, BarcodeFormat.UPC_A);
			}
			else
			{
				throw new Exception("ReaderException");
			}
		}
	}
}