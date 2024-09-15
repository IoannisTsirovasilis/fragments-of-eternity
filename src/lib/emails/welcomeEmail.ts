export function buildWelcomeEmailHtml(email: string, id: string) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to Fragments of Eternity</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #1a1a1a; color: #ffffff;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #2c2c2c; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);">
    
    <!-- Header -->
    <div style="text-align: center; padding-bottom: 20px; border-bottom: 1px solid #444;">
      <h1 style="color: #ffcc00; font-family: 'MedievalSharp', serif; font-size: 28px;">Welcome to the World of Nulmaris!</h1>
    </div>
    
    <!-- Content -->
    <div style="padding: 20px; color: #dddddd;">
      <p>Dear Adventurer,</p>
      
      <p>Welcome to the journey of <strong>Fragments of Eternity</strong>! You’ve taken the first step into the mysterious land of <strong>Nulmaris</strong>, a world where ancient secrets lie hidden, waiting to be uncovered.</p>
      
      <p>Expect exciting updates, exclusive teasers, and behind-the-scenes insights as the story unfolds. Your adventure begins soon!</p>

      <p>Thank you for joining us, and stay tuned for your next fragment of this epic journey.</p>

      <p><em>May your path be clear,</em><br>
      <strong>The Fragments of Eternity Team</strong></p>
    </div>
    
    <!-- Footer -->
    <div style="text-align: center; padding: 20px; color: #aaaaaa; font-size: 14px;">
      <p>&copy; 2024 Fragments of Eternity. All rights reserved.</p>
      
      <!-- Unsubscribe Section -->
      <p style="margin-top: 20px;">Don't want to receive updates anymore? You can <a href="${process.env.HOST}/unsubscribe/?email=${email}&token=${id}" style="color: #ffcc00;">unsubscribe here</a>.</p>
    </div>
    
  </div>
</body>
</html>

`;
}
