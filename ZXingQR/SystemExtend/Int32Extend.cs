using System;
using System.Collections.Generic;
using System.Linq;

namespace SystemExtend
{
	public static class Int32Extend
	{
		public static readonly int MaxValue = Number.MAX_VALUE;

		public static char ToChar(int val)
		{
			return string.FromCharCode(new int[] { val }).CharAt(0);
		}
	}
}
