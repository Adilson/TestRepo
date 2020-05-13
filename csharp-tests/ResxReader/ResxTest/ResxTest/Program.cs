using System;
using System.Collections.Generic;
//using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Resources;
using System.IO;

namespace ResxTest
{
    class Program
    {
        static void Main(string[] args)
        {
            string path = Path.GetFullPath(@".\Test1\Sub1\Resource1.resx");
            ResXResourceReader rr = new ResXResourceReader(path);
            rr.UseResXDataNodes = true;
            var metas = rr.GetMetadataEnumerator();
            Console.WriteLine("Metas:");
            while (metas.MoveNext())
                Console.WriteLine($"{metas.Key}: {metas.Value}");

            Console.WriteLine("Items:");
            var items = rr.GetEnumerator();
            while (items.MoveNext())
                Console.WriteLine($"{items.Key}: {items.Value}");

            Console.Read();
        }
    }
}
