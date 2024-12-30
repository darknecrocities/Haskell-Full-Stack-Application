import Web.Scotty
import Network.Wai.Middleware.Static
import qualified Data.ByteString.Lazy.Char8 as BS
import qualified Data.Text.Lazy as T

-- Define main function with static file handling
main :: IO ()
main = do
    scotty 3000 $ do
        -- Serve static files (HTML, CSS, JS) from the 'frontend' directory
        middleware $ staticPolicy (noDots >-> addBase "frontend")

        -- Example API route
        get (BS.pack "/users") $ do
            text (T.pack "Returning users list")
        
        post (BS.pack "/user") $ do
            text (T.pack "User created!")
