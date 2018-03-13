
git checkout -b auto-commit
@if %errorlevel% == 0 goto branch-ok
git checkout auto-commit

:branch-ok
git branch -v