using System;
using System.Collections.Generic;
using System.Linq;

namespace SystemExtend.Drawing.Imaging
{
	public class BitmapData
	{
		private byte[] data;

		public BitmapData(byte[] data)
		{
			this.data = data;
		}


		public byte[] Scan0
		{
			get { return data; }
			set { data = value; }
		}
	}
}
