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
namespace com.google.zxing.client.result
{
	
	/// <author>  Sean Owen
	/// </author>
	/// <author>www.Redivivus.in (suraj.supekar@redivivus.in) - Ported from ZXING Java Source 
	/// </author>
	public sealed class AddressBookParsedResult:ParsedResult
	{
		public String[] Names
		{
			get
			{
				return names;
			}
			
		}
		/// <summary> In Japanese, the name is written in kanji, which can have multiple readings. Therefore a hint
		/// is often provided, called furigana, which spells the name phonetically.
		/// 
		/// </summary>
		/// <returns> The pronunciation of the getNames() field, often in hiragana or katakana.
		/// </returns>
		public String Pronunciation
		{
			get
			{
				return pronunciation;
			}
			
		}
		public String[] PhoneNumbers
		{
			get
			{
				return phoneNumbers;
			}
			
		}
		public String[] Emails
		{
			get
			{
				return emails;
			}
			
		}
		public String Note
		{
			get
			{
				return note;
			}
			
		}
		public String[] Addresses
		{
			get
			{
				return addresses;
			}
			
		}
		public String Title
		{
			get
			{
				return title;
			}
			
		}
		public String Org
		{
			get
			{
				return org;
			}
			
		}
		public String URL
		{
			get
			{
				return url;
			}
			
		}
		/// <returns> birthday formatted as yyyyMMdd (e.g. 19780917)
		/// </returns>
		public String Birthday
		{
			get
			{
				return birthday;
			}
			
		}
		override public String DisplayResult
		{
			get
			{
				StringBuilder result = new StringBuilder();
				maybeAppend2(names, result);
				maybeAppend1(pronunciation, result);
				maybeAppend1(title, result);
				maybeAppend1(org, result);
				maybeAppend2(addresses, result);
				maybeAppend2(phoneNumbers, result);
				maybeAppend2(emails, result);
				maybeAppend1(url, result);
				maybeAppend1(birthday, result);
				maybeAppend1(note, result);
				return result.ToString();
			}
			
		}
		
		//UPGRADE_NOTE: Final was removed from the declaration of 'names '. "ms-help://MS.VSCC.v80/dv_commoner/local/redirect.htm?index='!DefaultContextWindowIndex'&keyword='jlca1003'"
		private String[] names;
		//UPGRADE_NOTE: Final was removed from the declaration of 'pronunciation '. "ms-help://MS.VSCC.v80/dv_commoner/local/redirect.htm?index='!DefaultContextWindowIndex'&keyword='jlca1003'"
		private String pronunciation;
		//UPGRADE_NOTE: Final was removed from the declaration of 'phoneNumbers '. "ms-help://MS.VSCC.v80/dv_commoner/local/redirect.htm?index='!DefaultContextWindowIndex'&keyword='jlca1003'"
		private String[] phoneNumbers;
		//UPGRADE_NOTE: Final was removed from the declaration of 'emails '. "ms-help://MS.VSCC.v80/dv_commoner/local/redirect.htm?index='!DefaultContextWindowIndex'&keyword='jlca1003'"
		private String[] emails;
		//UPGRADE_NOTE: Final was removed from the declaration of 'note '. "ms-help://MS.VSCC.v80/dv_commoner/local/redirect.htm?index='!DefaultContextWindowIndex'&keyword='jlca1003'"
		private String note;
		//UPGRADE_NOTE: Final was removed from the declaration of 'addresses '. "ms-help://MS.VSCC.v80/dv_commoner/local/redirect.htm?index='!DefaultContextWindowIndex'&keyword='jlca1003'"
		private String[] addresses;
		//UPGRADE_NOTE: Final was removed from the declaration of 'org '. "ms-help://MS.VSCC.v80/dv_commoner/local/redirect.htm?index='!DefaultContextWindowIndex'&keyword='jlca1003'"
		private String org;
		//UPGRADE_NOTE: Final was removed from the declaration of 'birthday '. "ms-help://MS.VSCC.v80/dv_commoner/local/redirect.htm?index='!DefaultContextWindowIndex'&keyword='jlca1003'"
		private String birthday;
		//UPGRADE_NOTE: Final was removed from the declaration of 'title '. "ms-help://MS.VSCC.v80/dv_commoner/local/redirect.htm?index='!DefaultContextWindowIndex'&keyword='jlca1003'"
		private String title;
		//UPGRADE_NOTE: Final was removed from the declaration of 'url '. "ms-help://MS.VSCC.v80/dv_commoner/local/redirect.htm?index='!DefaultContextWindowIndex'&keyword='jlca1003'"
		private String url;
		
		public AddressBookParsedResult(String[] names, String pronunciation, String[] phoneNumbers, String[] emails, String note, String[] addresses, String org, String birthday, String title, String url):base(ParsedResultType.ADDRESSBOOK)
		{
			this.names = names;
			this.pronunciation = pronunciation;
			this.phoneNumbers = phoneNumbers;
			this.emails = emails;
			this.note = note;
			this.addresses = addresses;
			this.org = org;
			this.birthday = birthday;
			this.title = title;
			this.url = url;
		}
	}
}