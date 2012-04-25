using System;
using System.Collections.Generic;
using System.Linq;

namespace SystemExtend
{
	public static class CharExtend
	{
		public static bool IsDigit(char val)
		{
			try
			{
				Number n = Number.Parse((string)val);
				return !Number.IsNaN(n);
			}
			catch
			{
				return false;
			}
		}
		public static Int32 ToInt32(char val)
		{
			return ((string)val).CharCodeAt(0);
		}
	}
}
