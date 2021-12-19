# nav-stack-bug

Note: this bug is NOT happening every time, and it's only for Android

How to reproduce:
- Click scan
- You will go to next screen
- Check if "Go back" button is partly hidden by bottom nav bar
- If not repeat until you will get it
- Then click "Don't show this information" toggle
- Button should go on right place

The problem:
- Screen viewport size (height) is not set properly sometimes that's why button is hidden under bottom nav bar
