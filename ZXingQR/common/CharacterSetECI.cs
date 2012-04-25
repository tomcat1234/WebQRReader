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
using System.Collections.Generic;
namespace com.google.zxing.common
{
	
	/// <summary> Encapsulates a Character Set ECI, according to "Extended Channel Interpretations" 5.3.1.1
	/// of ISO 18004.
	/// 
	/// </summary>
	/// <author>  Sean Owen
	/// </author>
	/// <author>www.Redivivus.in (suraj.supekar@redivivus.in) - Ported from ZXING Java Source 
	/// </author>
	public sealed class CharacterSetECI:ECI
	{
		public String EncodingName
		{
			get
			{
				return encodingName;
			}
			
		}
		
		private static Dictionary<object, object> VALUE_TO_ECI;
		private static Dictionary<object, object> NAME_TO_ECI;
		
		private static void  initialize()
		{
			VALUE_TO_ECI = new Dictionary<object, object>();
			NAME_TO_ECI = new Dictionary<object, object>();
			// TODO figure out if these values are even right!
			addCharacterSet1(0, "Cp437");
			addCharacterSet2(1, new String[]{"ISO8859_1", "ISO-8859-1"});
			addCharacterSet1(2, "Cp437");
			addCharacterSet2(3, new String[]{"ISO8859_1", "ISO-8859-1"});
			addCharacterSet1(4, "ISO8859_2");
			addCharacterSet1(5, "ISO8859_3");
			addCharacterSet1(6, "ISO8859_4");
			addCharacterSet1(7, "ISO8859_5");
			addCharacterSet1(8, "ISO8859_6");
			addCharacterSet1(9, "ISO8859_7");
			addCharacterSet1(10, "ISO8859_8");
			addCharacterSet1(11, "ISO8859_9");
			addCharacterSet1(12, "ISO8859_10");
			addCharacterSet1(13, "ISO8859_11");
			addCharacterSet1(15, "ISO8859_13");
			addCharacterSet1(16, "ISO8859_14");
			addCharacterSet1(17, "ISO8859_15");
			addCharacterSet1(18, "ISO8859_16");
			addCharacterSet2(20, new String[]{"SJIS", "Shift_JIS"});
		}
		
		//UPGRADE_NOTE: Final was removed from the declaration of 'encodingName '. "ms-help://MS.VSCC.v80/dv_commoner/local/redirect.htm?index='!DefaultContextWindowIndex'&keyword='jlca1003'"
		private String encodingName;
		
		private CharacterSetECI(int value_Renamed, String encodingName):base(value_Renamed)
		{
			this.encodingName = encodingName;
		}
		
		private static void  addCharacterSet1(int value_Renamed, String encodingName)
		{
			CharacterSetECI eci = new CharacterSetECI(value_Renamed, encodingName);
			VALUE_TO_ECI[(Int32) value_Renamed] = eci; // can't use valueOf
			NAME_TO_ECI[encodingName] = eci;
		}
		
		private static void  addCharacterSet2(int value_Renamed, String[] encodingNames)
		{
			CharacterSetECI eci = new CharacterSetECI(value_Renamed, encodingNames[0]);
			VALUE_TO_ECI[(Int32) value_Renamed] = eci; // can't use valueOf
			for (int i = 0; i < encodingNames.Length; i++)
			{
				NAME_TO_ECI[encodingNames[i]] = eci;
			}
		}
		
		/// <param name="value">character set ECI value
		/// </param>
		/// <returns> {@link CharacterSetECI} representing ECI of given value, or null if it is legal but
		/// unsupported
		/// </returns>
		/// <throws>  IllegalArgumentException if ECI value is invalid </throws>
		public static CharacterSetECI getCharacterSetECIByValue(int value_Renamed)
		{
			if (VALUE_TO_ECI == null)
			{
				initialize();
			}
			if (value_Renamed < 0 || value_Renamed >= 900)
			{
				throw new Exception("Bad ECI value: " + value_Renamed);
			}
			return (CharacterSetECI) VALUE_TO_ECI[(Int32) value_Renamed];
		}
		
		/// <param name="name">character set ECI encoding name
		/// </param>
		/// <returns> {@link CharacterSetECI} representing ECI for character encoding, or null if it is legal
		/// but unsupported
		/// </returns>
		public static CharacterSetECI getCharacterSetECIByName(String name)
		{
			if (NAME_TO_ECI == null)
			{
				initialize();
			}
			return (CharacterSetECI) NAME_TO_ECI[name];
		}
	}
}