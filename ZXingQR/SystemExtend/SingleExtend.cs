using System;
using System.Collections.Generic;
using System.Linq;

namespace SystemExtend
{
	public static class SingleExtend
	{
		public static readonly float NaN = Number.NaN;

		public static bool IsNaN(float val)
		{
			return Number.IsNaN(val);
		}
	}
}
