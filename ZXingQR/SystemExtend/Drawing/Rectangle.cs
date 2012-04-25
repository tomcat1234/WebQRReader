using System;
using System.Collections.Generic;
using System.Linq;

namespace SystemExtend.Drawing
{
	public class Rectangle
	{
		private int x;
		private int y;
		private int width;
		private int height;

		public Rectangle(int x, int y, int width, int height)
		{
			this.x = x;
			this.y = y;
			this.width = width;
			this.height = height;
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
	}
}
