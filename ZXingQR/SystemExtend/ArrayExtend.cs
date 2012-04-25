using System;
using System.Collections.Generic;
using System.Linq;

namespace SystemExtend
{
	public static class ArrayExtend
	{
		public static void Copy(Array sourceArray, int sourceIndex, Array destinationArray, int destinationIndex, int length)
		{
			for (int i = 0; i < length; i++)
			{
				destinationArray[destinationIndex + i] = sourceArray[sourceIndex + i];
			}
		}
	}
}
