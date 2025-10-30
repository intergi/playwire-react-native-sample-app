# Playwire React Native Sample app

This workspace demonstrates the usage of PlaywireSDK in a React Native project:

## Setup Github Gradle registry access

Playwire Android SDK is currently distributed via a remote GitHub Gradle registry. Playwire SDK is accessible publicly there but GitHub still requires authentication to pull the SDK.

See the official GitHub Gradle registry's guide to get more details about Github authentication.

You have to create a personal access token(PAT) to synchronize gradle without errors. See the official GitHub PAT creation guide to create token.

Open `android/build.gradle` and replace placeholders with your credentials.

```gradle
maven {
    name = "GitHubPackages"
    url = 'https://maven.pkg.github.com/intergi/playwire-android-binaries'
    credentials {
        username = "YOUR_GITHUB_USERNAME"
        password = "YOUR_GITHUB_PERSONAL_ACCESS_TOKEN"
    }
}  
```
Open project and run Sync project with gradle files command.
Run demo app

Select required demo app configuration and run.