# React Native Blueprint

A sample React Native project, created using create-react-native-app. 
It's designed with a simple setup to work seamlessly with Visual Studio Code (extensions, etc.), providing features like type checking and more.

The primary intention behind this project is to serve as a reusable sample codebase, eliminating the need for setting up a new project from scratch every time.

## Contents

1. [React Native Installation](#react-native-installation)
2. [Java Installation](#java-installation)
3. [Java Home Configuration](#java-home-configuration)
4. [Android Studio Installation](#android-studio-installation)
5. [Android SDK Setup](#android-sdk-setup)
6. [Android NDK Setup](#android-ndk-setup)
7. [Xcode Installation](#xcode-installation)
8. [CocoaPods Installation](#cocoapods-installation)
9. [Flipper Setup](#flipper-setup)
10. [Visual Studio Code Setup](#visual-studio-code-setup)

<a name="react-native-installation"></a>
## React Native Installation

1. **Homebrew Installation**: If you haven't installed Homebrew yet, follow the instructions in the [official documentation](https://brew.sh/).


2. **Node.js & Watchman Installation**: Install Node.js and Watchman using Homebrew:

```bash
brew install node
brew install watchman
```

3. **React Native CLI Installation**: Install the React Native CLI:

```bash
npm install -g react-native-cli
```

<a name="java-installation"></a>
## Java Installation

1. **Java Installation**: To install the latest version of Java, run:

```bash
brew install openjdk
brew install openjdk@17
brew install openjdk@11
```

This command installs the latest OpenJDK version and java17, java11.

<a name="java-home-configuration"></a>
## Java Home Configuration

1. **Locate Installed Java**: Use the following command to find where Java is installed:

```bash
/usr/libexec/java_home -V
```

This command lists all installed JDKs and their locations. If multiple versions of Java are installed, choose the one you want as your `JAVA_HOME`. The latest version is recommended for Android development.

2. **Set JAVA_HOME Environment Variable**: Add these lines to your `~/.zshrc` or `~/.bash_profile`, replacing `/path/to/java` with the location from the previous step:

```bash
# latest java
export JAVA_HOME=$(/usr/libexec/java_home)

# the following is java 17.
# export JAVA_HOME="$(/usr/libexec/java_home -v 17)"

# java 11
# export JAVA_HOME="$(/usr/libexec/java_home -v 11)"

# use this line if installed latest java from homebrew
export PATH=$PATH:/opt/homebrew/opt/openjdk/bin
```

Restart your terminal or run `source ~/.zshrc` or `source ~/.bash_profile`.

<a name="android-studio-installation"></a>
## Android Studio Installation

1. **Android Studio Installation**: Download and install Android Studio from the [official website](https://developer.android.com/studio). Follow the installer's instructions.

<a name="android-sdk-setup"></a>
## Android SDK Setup

1. **Open Android Studio**: Launch Android Studio and open or create a project.

2. **Install Android SDK**: Navigate to `Tools` > `SDK Manager`. In the SDK Manager window, go to the `SDK Platforms` tab, check the version of Android you want to use (usually the latest), and click `Apply`. Android Studio will download and install the Android SDK.

<a name="android-ndk-setup"></a>
## Android NDK Setup

1. **Open Android Studio**: Launch Android Studio and open or create a project.

2. **Install Android NDK**: Navigate to `Tools` > `SDK Manager`. In the SDK Manager window, go to the `SDK Tools` tab, check `NDK (Side by side)`, and click `Apply`. Android Studio will download and install the NDK.

3. **Set ANDROID_HOME Environment Variable**:Add these lines to your `~/.zshrc` or `~/.bash_profile`, replacing `/path/to/java` with the location from the previous step:

```bash
export ANDROID_HOME=$HOME/Library/Android/sdk

export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/cmdline-tools/latest/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

<a name="xcode-installation"></a>
## Xcode Installation

1. **Xcode Installation**: Download and install Xcode from the Mac App Store. Follow the installer's instructions.

<a name="cocoapods-installation"></a>
## CocoaPods Installation

1. **CocoaPods Installation**: Install CocoaPods by running:

```bash
sudo gem install cocoapods
```

<a name="flipper-setup"></a>
## Flipper Setup

1. **Flipper Installation**: Install Flipper and related tools by running:

```bash
brew install --cask flipper
brew install ios-deploy
```

<a name="visual-studio-code-setup"></a>
## Visual Studio Code Setup

1. **Visual Studio Code Installation**: Download and install Visual Studio Code from the [official website](https://code.visualstudio.com/).

2. **Extension Installation**: Open your project in Visual Studio Code. If a `.vscode/extensions.json` file exists, Visual Studio Code will suggest installing the extensions listed in this file.