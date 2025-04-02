import aiml
import os

# Create AIML Kernel
kernel = aiml.Kernel()

# Load AIML Files
for file in os.listdir("files"):
    if file.endswith(".aiml"):
        kernel.learn(f"files/{file}")

print("Chatbot is ready! Type 'exit' to stop.")

# Chat loop
while True:
    user_input = input("You: ")
    if user_input.lower() == "exit":
        print("Goodbye!")
        break
    response = kernel.respond(user_input)
    print("Bot:", response)
