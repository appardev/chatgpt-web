docker stop chatgpt-web &&
docker remove chatgpt-web &&
docker build -t chatgpt-web . &&
docker run --name chatgpt-web -d -p 139.162.107.239:3002:3002 --env OPENAI_API_KEY=$OPENAI_API_KEY --env OPENAI_API_MODEL=$OPENAI_API_MODEL chatgpt-web
