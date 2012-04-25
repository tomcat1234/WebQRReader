using System;
using System.Collections.Generic;
using System.Linq;
using SystemExtend.Drawing.Imaging;

namespace SystemExtend.Drawing
{
	public class Bitmap
	{
		public Bitmap(int width, int height, PixelFormat pixelFormat)
		{
			this.width = width;
			this.height = height;
			this.pixelFormat = pixelFormat;

			if (pixelFormat == PixelFormat.Format8bppIndexed)
			{
				data = new byte[width * height * 1];
			}
			else
			{
				throw new Exception("ArgumentException");
			}
		}

		private byte[] data;
		private PixelFormat pixelFormat;
		private int width;
		private int height;

		public PixelFormat PixelFormat
		{
			get { return pixelFormat; }
			set { pixelFormat = value; }
		}

		public int Width
		{
			get { return width; }
			set { width = value; }
		}

		public int Height
		{
			get { return height; }
			set { height = value; }
		}

		public BitmapData LockBits(Rectangle rect, ImageLockMode flags, PixelFormat format)
		{
			return new BitmapData(data);
		}

		public void UnlockBits(BitmapData bmpData)
		{
		}

		public Color GetPixel(int x, int y)
		{
			return null;
		}
	}
}
