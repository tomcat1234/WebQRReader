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
namespace com.google.zxing.client.result
{
	
	/// <author>  Sean Owen
	/// </author>
	/// <author>www.Redivivus.in (suraj.supekar@redivivus.in) - Ported from ZXING Java Source 
	/// </author>
	public sealed class SMSParsedResult:ParsedResult
	{
		public String SMSURI
		{
			get
			{
				return smsURI;
			}
			
		}
		public String Number
		{
			get
			{
				return number;
			}
			
		}
		public String Via
		{
			get
			{
				return via;
			}
			
		}
		public String Subject
		{
			get
			{
				return subject;
			}
			
		}
		public String Body
		{
			get
			{
				return body;
			}
			
		}
		public String Title
		{
			get
			{
				return title;
			}
			
		}
		override public String DisplayResult
		{
			get
			{
				StringBuilder result = new StringBuilder();
				maybeAppend1(number, result);
				maybeAppend1(via, result);
				maybeAppend1(subject, result);
				maybeAppend1(body, result);
				maybeAppend1(title, result);
				return result.ToString();
			}
			
		}
		
		//UPGRADE_NOTE: Final was removed from the declaration of 'smsURI '. "ms-help://MS.VSCC.v80/dv_commoner/local/redirect.htm?index='!DefaultContextWindowIndex'&keyword='jlca1003'"
		private String smsURI;
		//UPGRADE_NOTE: Final was removed from the declaration of 'number '. "ms-help://MS.VSCC.v80/dv_commoner/local/redirect.htm?index='!DefaultContextWindowIndex'&keyword='jlca1003'"
		private String number;
		//UPGRADE_NOTE: Final was removed from the declaration of 'via '. "ms-help://MS.VSCC.v80/dv_commoner/local/redirect.htm?index='!DefaultContextWindowIndex'&keyword='jlca1003'"
		private String via;
		//UPGRADE_NOTE: Final was removed from the declaration of 'subject '. "ms-help://MS.VSCC.v80/dv_commoner/local/redirect.htm?index='!DefaultContextWindowIndex'&keyword='jlca1003'"
		private String subject;
		//UPGRADE_NOTE: Final was removed from the declaration of 'body '. "ms-help://MS.VSCC.v80/dv_commoner/local/redirect.htm?index='!DefaultContextWindowIndex'&keyword='jlca1003'"
		private String body;
		//UPGRADE_NOTE: Final was removed from the declaration of 'title '. "ms-help://MS.VSCC.v80/dv_commoner/local/redirect.htm?index='!DefaultContextWindowIndex'&keyword='jlca1003'"
		private String title;
		
		public SMSParsedResult(String smsURI, String number, String via, String subject, String body, String title):base(ParsedResultType.SMS)
		{
			this.smsURI = smsURI;
			this.number = number;
			this.via = via;
			this.subject = subject;
			this.body = body;
			this.title = title;
		}
	}
}