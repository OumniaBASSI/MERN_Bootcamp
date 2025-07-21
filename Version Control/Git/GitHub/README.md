# Github

## what is github

It's a platform for version control and collaboration that allows developers to store, manage, and track changes to their code using Git.

##  Benefits Of Using GitHub?

![Benefits Of Using GitHub](image.png)

## Connect the local repository to the remote

1. Setup the connection

```bash
git remote add origine <url>
```

2. Setup the branch

```bash
git branch -M main
```

This command will rename your default local branch name to `main` which is the default branch on GitHub.

{% hint style="info" %}
A branch in Git is like a separate workspace where you can make changes to your project without affecting the main version.
{% endhint %}

3. Push the changes

```bash
git push -u origin main
```
This command will upload the changes you made to your remote repository.
