// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "CapacitorCookiesFlush",
    platforms: [.iOS(.v15)],
    products: [
        .library(
            name: "CapacitorCookiesFlush",
            targets: ["CookiesFlushPlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", from: "8.0.0")
    ],
    targets: [
        // Objective-C target for plugin registration
        .target(
            name: "CookiesFlushPluginObjC",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm")
            ],
            path: "ios/Plugin",
            sources: ["CookiesFlushPlugin.m"],
            publicHeadersPath: "."),
        // Swift target for implementation
        .target(
            name: "CookiesFlushPlugin",
            dependencies: [
                "CookiesFlushPluginObjC",
                .product(name: "Capacitor", package: "capacitor-swift-pm")
            ],
            path: "ios/Plugin",
            sources: ["CookiesFlush.swift", "CookiesFlushPlugin.swift"])
    ]
)
