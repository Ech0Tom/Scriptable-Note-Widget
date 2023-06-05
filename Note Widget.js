// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: deep-gray; icon-glyph: book-open;
//start//
let widget = new ListWidget()

//Background Colour - Switches between light/dark mode
const colorBG = Color.dynamic(new Color("#ffffff"), new Color("#1c1c1c"))

//text Colour - Switches between black/white
const colorText = Color.dynamic( new Color("#000000"), new Color("#fefffe"))

//text body
const text = widget.addText("🦆 type \n🦔 your \n🐄 notes \n🦡 here");
text.font = Font.systemFont(16);
text.leftAlignText();

//end
Script.setWidget(widget);
widget.presentMedium();
Script.complete();

// Use this widget to display text notes on your home screen.
// Type your text inside the "" in the 'text body' section.
// To add a line type \n at the end of a line.
