WebQRReader
===========

This software is a QR Code decoder based on Pure JavaScript. You can take text from QR image. QR decoder engine is ZXing written by C#, and Script# converts this code into JavaScript.

For example:
 You can decode from Real-Time video taken with Web Camera.
 (you use Chrome 18 dev channel or later, have a Web Camera, and MediaStream(WebRTC) is enabled)

Restriction:
 Text must be written by ASCII or UTF-8 encoding.(My UTF-8 decoder is buggy...)

To use this decoder, your web site only includes two script files "mscorlib.js" of Script# and "ZXingQR.js". See example.

If you build this C# ZXingQR Project, you must download Script# and install it.
This C# ZXingQR Project is NOT a normal .NET Framework project.


このソフトウェアは、JavaScriptのみで書かれたQRコードデコーダです。QRコードの画像をデコードしテキストを抽出できます。デコードエンジンはZXingのC#派生系を使っていて、それをScript#でJavaScriptに変換したものです。

たとえば、Webカメラで撮影したリアルタイムの映像からデコードすることができます。
（Chrome 18 dev channel 以降を使い、Webカメラを持っていて、MediaStream（WebRTC）を有効にすればね。）

制限事項として、デコードできるテキストはASCII文字かUTF-8の文字のみです。（UTF-8のデコーダは残念な出来です。）

このデコーダを使うには、Script#の"mscorlib.js"と"ZXingQR.js"の2つのスクリプトファイルを読み込んでください。詳しくはサンプルを見てください。

もしC#のZXingQRプロジェクトをビルドする場合は、Script#をダウンロードしインストールしてください。
C#のZXingQRプロジェクトは、通常の.NET Frameworkのプロジェクトではありません。

Thank you for great libraries.

ZXing: http://code.google.com/p/zxing/

Script#: http://projects.nikhilk.net/ScriptSharp


