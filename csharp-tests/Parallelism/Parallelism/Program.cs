using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Threading;

namespace Parallelism
{
    class Program
    {
        private static object syncroot = new object();
        [STAThread]
        static void Main(string[] args)
        {
            Thread thread = new System.Threading.Thread(new System.Threading.ThreadStart(Metodo1));
            thread.Start();
            Console.WriteLine("Esperando...");
            Console.Read();
            Console.WriteLine("Passo 1");
            Monitor.Enter(syncroot);
            Console.WriteLine("Passo 2");
            Monitor.PulseAll(syncroot);
            Console.WriteLine("Passo 3");
            Monitor.Exit(syncroot);
            Console.WriteLine("Passo 4");
            System.Threading.Thread.Sleep(2 * 60 * 1000);
        }

        static void Metodo1()
        {
            Monitor.Enter(syncroot);
            Console.WriteLine("Metodo1...");
            Monitor.Wait(syncroot, 60 * 1000);
            Monitor.Exit(syncroot);
            Console.WriteLine("Metodo1 OK");
        }
        static void Metodo2()
        {

        }
    }
}
