# Contributing to Discotech

If you are on this page it means you are almost ready to contribute proposing changes, fixing issues or anything else.
🎉👍 Any idea to help improving the Decathlon Discotech project is really welcome!

## Code of conduct

This project and everyone participating in it is governed by the [Discotech code of conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## What are you talking about? Pull Request, Merge, Push

If you are not familiar with Git and GitHub terms you can check a [complete glossary](https://docs.github.com/en/get-started/quickstart/github-glossary) on the GitHub website.

## How Can I contribute?

### Reporting Bug

The first way to contribute to a project is simply reporting a Bug. If you find anything which is not working well or as expected you can open an [issue](https://github.com/jeremyjousse/discotech/issues).

Before to open the issue please check if there is one similar already opened on [Discotech Project](https://github.com/users/jeremyjousse/projects/1/views/1). It will save us hours of work and it will allow us to answer you quickly with the desired hotfix.

> **NOTE:** if looking for existing issues you will find the same problem, or similar, in **closed** state, please refer to this issue (with it's number) when you are opening your one. It is maybe a regression we didn't see. In this way you will help to go faster and to find a definitive solution to the recurrent problem.

When you are opening an issue, please be sure to report as much information as you can to allow us to replicate the problem and faster find the solution. To help you on this task, [Discotech](https://github.com/jeremyjousse/discotech/issues) repository is providing Issues Templates:

- Bug
- Feature

If you chose the *Bug* template there is some guideline helping you to fill up the issue. You don't have to provide all the information you will find on the template but, try to be your best.

### Suggesting enhancement

If you think we can to better with the Discotech project and you have some good ideas, you can file an issue selecting the *Feature* template.
Even in this case please try to be as much clear as possible. The faster we can understand what you want or what you are proposing, the faster the implementation will be.

### Code Contribution

If you are a dev and you want to directly fix a problem or implement a new feature... you are the best one! :clap::clap:  
To propose any change you have to submit us a [PullRequest](https://help.github.com/articles/about-pull-requests/)

The workflow we are using the Discotech project is:

1. Fork the Discotech sub repository (as you don't have a direct write access them)
2. :warning: Install [Prettier](https://prettier.io/) and [ESLint](https://eslint.org/) and make sure you use them
3. Create your code, `Commit` and `Push the code` on your forked repo
4. Create a GitHub `Pull Request` to our **develop** branch (which is the main one for the coming version).

We will take the time to review your code, make some comments or asking information if needed. But, as you took time to help us, we will take in serious consideration what you are proposing.  
To quickly have your code available on production, please take care and read our [Contribution acceptance criteria](#contribution-acceptance-criteria)

#### Commit and Push on your branch

```bash
git add <files>
git commit -m "A commit message"
git push origin <my-branch-name> 
```

:warning: Your commit message must follow [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/) specs.

### Pull Request guidelines

When you open your pull request provide as much information as possible. You use the templates described into the [reporting bug](#reporting-bug) section.

- For an issue, describe what you are fixing with your pull request and how you had found the defect.
- If you are proposing an enhancement, describe what you are adding to the code (new function, performance enhancement, documentation update, changing an existing function, ...).

### Contribution acceptance criteria

We love maintainable software and we are happy when some else than us is able to take the code, **understand it** and be able to change it.  
To reach this goal we fixed some rule in our team and we would love to go ahead in this way, even with the external contribution:

1. Be sure your code compile: no syntax error, no missing library, ...
2. Be sure to write a Jest test covering almost all the code you wrote. 100% of code coverage is useless, we just need all the tests allowing to understand the possible cases about the input and expected output.
3. Add comments on the code if you want to explain better what is happening in the code.
4. Add documentation for any API, if needed, or functional explaining what changed/added with your code.

If you respect all these rules you will help us saving time and we will be able to check your pull request faster.
