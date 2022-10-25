
namespace WebApplication1
{
    public sealed class Singleton
    {
        private static Modules instance = null;
        public static Modules GetInstance
        {
            get
            {
                if (instance == null)
                    instance = new Modules();
                return instance;
            }
        }
    }
}
