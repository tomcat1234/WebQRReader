using System;
using System.Collections.Generic;
using System.Linq;

namespace SystemExtend
{
	public static class StringExtend
	{
		public static char[] ToCharArray(string val)
		{
			char[] list = new char[val.Length];
			for (int i = 0; i < val.Length; i++)
			{
				list[i] = val.CharAt(i);
			}
			return list;
		}
	}
}
