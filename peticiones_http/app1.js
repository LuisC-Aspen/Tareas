<Project DefaultTargets="Build" xmlns="http://schemas.microsoft.com/developer/msbuild/2003" ToolsVersion="4.0">
  <PropertyGroup>
    <VisualStudioVersion Condition="'$(VisualStudioVersion)' == ''">14.0</VisualStudioVersion>
    <VSToolsPath Condition="'$(VSToolsPath)' == ''">$(MSBuildExtensionsPath32)\Microsoft\VisualStudio\v$(VisualStudioVersion)</VSToolsPath>
    <Name>app1</Name>
    <RootNamespace>app.js</RootNamespace>
  </PropertyGroup>
  <Import Project="$(MSBuildExtensionsPath)\$(MSBuildToolsVersion)\Microsoft.Common.props" Condition="Exists('$(MSBuildExtensionsPath)\$(MSBuildToolsVersion)\Microsoft.Common.props')" />
  <PropertyGroup>
    <Configuration Condition=" '$(Configuration)' == '' ">Debug</Configuration>
    <SchemaVersion>2.0</SchemaVersion>
    <ProjectGuid>abadfa8f-ff76-4772-8030-496b9a73af62</ProjectGuid>
    <ProjectHome>app.js\app.js\</ProjectHome>
    <StartupFile>app.js</StartupFile>
    <StartWebBrowser>False</StartWebBrowser>
    <SearchPath>
    </SearchPath>
    <WorkingDirectory>.</WorkingDirectory>
    <OutputPath>.</OutputPath>
    <TargetFrameworkVersion>v4.0</TargetFrameworkVersion>
    <ProjectTypeGuids>{3AF33F2E-1136-4D97-BBB7-1795711AC8B8};{9092AA53-FB77-4645-B42D-1CCCA6BD08BD}</ProjectTypeGuids>
    <StartWebBrowser>false</StartWebBrowser>
  </PropertyGroup>
  <PropertyGroup Condition=" '$(Configuration)' == 'Debug' ">
    <DebugSymbols>true</DebugSymbols>
  </PropertyGroup>
  <PropertyGroup Condition=" '$(Configuration)' == 'Release' ">
    <DebugSymbols>true</DebugSymbols>
  </PropertyGroup>
  <ItemGroup>
    <Content Include="app.js" />
    <Content Include="package.json">
      <Publish>False</Publish>
    </Content>
    <Content Include="README.md" />
  </ItemGroup>
  <Import Project="$(VSToolsPath)\Node.js Tools\Microsoft.NodejsToolsV2.targets" />
</Project>