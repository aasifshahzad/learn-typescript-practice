enum Color {Red, Green, Blue};//starts with 0
var c: Color = Color.Green;

enum Color1 {Red = 1, Green, Blue};
var colorName: string = Color1[2];
console.log(colorName);

enum Color2 {Red = 1, Green = 2, Blue = 4};//can assign values to all
var colorIndex = Color2["Blue"];
console.log(colorIndex);

// Numeric enums
// enum Direction {
//   Up = 1,
//   Down,
//   Left,
//   Right,
// }

// Using enum
enum UserResponse {
  No = 0,
  Yes = 1,
}
 
function respond(recipient: string, message: UserResponse): void {
  // ...
}
 
respond("Princess Caroline", UserResponse.Yes);

//String enums
enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
  }