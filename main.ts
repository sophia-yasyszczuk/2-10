/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Sophia
 * Created on: Mar 2026
 * This program ...
*/

// Initialize the strip on Pin P1 with 4 pixels
let pixels = neopixel.create(DigitalPin.P1, 4, NeoPixelMode.RGB);
let lightValue: number = 0;

forever(function () {
    // 1. Read the current light level
    lightValue = input.lightLevel();

    // 2. Clear the buffer (turns them 'off' in memory)
    pixels.clear();

    // 3. Condition 1: <= 51 (No pixels)
    if (lightValue <= 51) {
        // Explicitly show nothing
        pixels.clear();
    }

    // 4. Condition 2: > 51 (Fixes the gap at 52)
    if (lightValue > 51) {
        pixels.setPixelColor(0, NeoPixelColors.White);
    }

    // 5. Condition 3: > 104
    if (lightValue > 104) {
        pixels.setPixelColor(1, NeoPixelColors.White);
    }

    // 6. Condition 4: > 156
    if (lightValue > 156) {
        pixels.setPixelColor(2, NeoPixelColors.White);
    }

    // 7. Condition 5: > 208
    if (lightValue > 208) {
        pixels.setPixelColor(3, NeoPixelColors.White);
    }

    // 8. Push the memory changes to the actual LEDs
    pixels.show();

    // 9. Breathable delay
    pause(100);
})