using Microsoft.Extensions.Configuration;
using System;
using System.IO;

namespace SettingsTest
{
    class Program
    {
        static void Main(string[] args)
        {
            IConfigurationRoot config;

            var configurationBuilder = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json")
                .AddJsonFile("environmentsettings.json");

            config = configurationBuilder.Build();
            var settings = new AppSettings();
            config.Bind("appsettings", settings);

            Console.WriteLine("Hello World!");
        }
    }
}
