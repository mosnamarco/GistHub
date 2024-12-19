# GistHub - The Summarizer Webapp

Welcome to **GistHub**, a webapp that summarizes your content with the power of AI! 🚀✨

## Requirements

Before we dive into the magic, make sure you have the following:
- **Backend (API)**: [GistHub_API](https://github.com/mosnamarco/GistHub_API.git)
- **Frontend (Client)**: This repository, GistHub

## Tech Stack
- **Frontend**: Built with **Next.js** and styled with **Material-UI** for that sleek, modern look.
- **Backend**: Powered by **Flask** (because who doesn't love Python?) to handle all your API needs.
- **Summarization Model**: We're using **Facebook's BART Large CNN** model (via Hugging Face) for the summarization magic.

## Running the App

To run GistHub, you'll need both the **frontend (client)** and **backend (API)** running. But hey, if you're feeling adventurous, you can totally run just one part—frontend or backend. **Whatever floats your boat** 🚤.

### 1. **Clone both the frontend and backend**:

```bash
# Clone the API repository
git clone https://github.com/mosnamarco/GistHub_API.git

# Clone this repository (client)
git clone https://github.com/yourusername/GistHub.git
```

### 2. **Start the Backend (API)**:

Make sure you have Python installed (we're all about that Python love 💖).

```bash
# Navigate to the backend folder
cd GistHub_API

# Install dependencies
pip install -r requirements.txt

# Run the Flask app (Backend)
python app.py
```

### 3. **Start the Frontend (Client)**:

Make sure Node.js is installed (because JavaScript lives here too, folks).

```bash
# Navigate to the frontend folder
cd GistHub

# Install dependencies
npm install

# Run the Next.js app (Frontend)
npm run dev
```

### 4. **Start Summarizing!**

Once both the frontend and backend are running, head over to `http://localhost:3000`, and start pasting text to get it summarized. Or, just fire up one part of the stack and see what happens.

## Notes:

- You **must** run both parts together to get the full experience, but hey, you can experiment with the client or backend independently. **Do your thing!**
- Want to dive into the code? Check out the frontend or backend sections. There's plenty of room for exploration and contributions. 🤓

## Contributing

If you want to contribute, feel free to fork the repo, make some changes, and submit a pull request! Contributions are always welcome (but remember, no unsolicited "improvements" like adding a pop-up with memes).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
