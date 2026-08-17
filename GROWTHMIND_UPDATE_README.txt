GrowthMind update pack for Olivia Tang's existing oliviatang-live project.

IMPORTANT:
- Copy the CONTENTS of this oliviatang-live folder into your existing oliviatang-live folder.
- Choose Replace/Overwrite when Windows asks about duplicate files.
- This pack intentionally does NOT include .git or node_modules, so your existing GitHub connection and installed dependencies stay untouched.

After copying:
1. Open your existing oliviatang-live folder in VS Code.
2. Run: npm run dev
3. Test the homepage GrowthMind card.
4. Test: http://localhost:5173/growthmind
5. When it looks right, run:
   git status
   git add .
   git commit -m "Add GrowthMind case study"
   git push

Vercel should deploy automatically after the GitHub push.
