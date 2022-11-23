![Node Guardians: Quests](./media/banner.png)

Welcome guardian. The road out will be treacherous, but remember, fortune favors the brave.

`ng-questplay` is a lightweight CLI-based application that helps you manage your quests as you venture out into [the wilderness](https://nodeguardians.io/) to complete quests and fulfill your duty as a _Node Guardian_.

## Getting Started

We **highly recommend** that you set up Questplay by following [our tutorial](https://nodeguardians.io/dev-hub?s=devhub-campaigns&sc=tutorial). But here are the brief steps anyways.

1. Create a new private repository `ng-questplay` on Github and leave it empty for now. Then, install [our Github application](https://github.com/apps/node-guardians) on it.

    > ⚠ Your repository must be private!

2. Download this repository onto your local device, and push it to the Github repository you have created.

    ```
    git clone https://github.com/Nodeguardians/ng-questplay.git
    cd ng-questplay
    git remote set-url origin https://github.com/{GITHUB_USERNAME}/ng-questplay.git
    git push -u origin main
    ```

    > 💡 Replace `GITHUB_USERNAME` with your Github username!

3. Next, install the required dependencies.

    ```
    npm install && npm link
    ```

4. Create a [Github authentication token](https://nodeguardians.io/?s=home-faq&sf=devhub--why-and-how-do-i-create-a-github-token) with **public repo access**. Then, create a `.env` file in your root folder and add a `GITHUB_TOKEN` variable:

    ```bash
    # In .env file
    GITHUB_TOKEN = "ghp_..." # Add token here
    ```

    > ⚠️ Take care to not share / upload your `.env` file to anyone or anywhere.

## Finding a Quest

Run the following command to find and download a specific quest into your repo.

```
quest find
```

Alternatively, you can immediately specify the quest name (hyphenated, no spaces).

```
quest find using-signatures
```

## Running a Local Test

To run a local test in a quest, first make sure you are in the quest folder. Then:

```
# Run local tests in Part 1
quest test 1
```

```
# Run all local tests
quest test
```

## Submitting a Quest

To submit a quest for verification, first make sure you are in the quest folder.
Commit all your changes into your local repository. Then run:

```
quest submit
```

This command pushes your code to your remote repository in Github for verification.

## Updating CLI

To update the CLI, run:

```
quest update
```
