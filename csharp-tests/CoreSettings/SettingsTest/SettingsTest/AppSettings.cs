using System;
using System.Collections.Generic;
using System.Text;

namespace SettingsTest
{
    public class AppSettings
    {
        public string Environment { get; set; }
        public Dictionary<string,string> StorageAccounts { get; set; }
        public bool FeatureEnabled { get; set; }
    }
}
