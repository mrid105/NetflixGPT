# NetflixGPT
- Create-react-app
- Configure Tailwind
- Header
- Routing of the App
- Login form
- Sign up form
- Form Validation
- useRef Hook
- Firebase setup
- Deploying app to production
- User Authentication using firebase
- Saving user info by using userSlice in redux store
- Implemented Sign Out
- Update Profile
- BugFix- if the user is not logged in redirect to browse page and vice versa
- Unsubscribed to the onAuthStateChanged callback
- Add hardcoded data to constants file
- Register for TMDB API and create app and get access token 
- Get movie data : now playign movies list API
- Custom Hook for now playing movies
- create movieSlice
- Update store with movies Data
- Planning for main and secondary container
- Fetch trailer video
- Update the store with trailer video data
- Embedded the youtube video and make it autoplay and mute
- Tailwind classes
- Build secondary component
- Movie List
- Movie Card
- TMDB image cdn
- Made Browse UI Better : Tailwind
- usePopularMovies Custom Hook
- GPT Search Page
- GPT Search Bar
- Multi-Language Feature in our App
- GPT Search OPENAI API key
- GPT search API call
- Fetched GPT movies suggestions from TMDB 
- Created gpt slice to add data there
- Reused movieList component to make movie recommendation container
- Memoization
- adding .env file to gitignore
- made site responsive



# Features
(LoggedOut)
- Sign In Page (when /browse)
    - sign in/signup form
    - redirect to browse page (LoggedIn user)
- Browse Page (after authentication)
    - Header
    - Main Movie
        - Trailer in background
        - Title and Description
    - Movie Suggestions (separated by type)
        - vertically scrollable (Movie Lists * n)

- NetflixGPT 
    - Search Bar
    - Movie Suggestions (GPT API)