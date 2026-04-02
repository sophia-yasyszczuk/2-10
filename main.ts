/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Sophia
 * Created on: Mar 2026
 * This program ...
*/

// Assume 'light' is a variable reading from a sensor (0-255)
let lightValue: number = input.lightLevel();
let pixels = neopixel.create(DigitalPin.P1, 4, NeoPixelMode.RGB);

forever(function () {
    lightValue = input.lightLevel();

    // Turn all pixels off initially to reset the state
    pixels.clear();

    // Condition 1: <= 51 (0 Neopixels)
    if (lightValue <= 51) {
        // No pixels are set, clear() already handled this
    }

    // Condition 2: > 52 (At least 1 Neopixel)
    if (lightValue > 52) {
        pixels.setPixelColor(0, NeoPixelColors.White);
    }

    // Condition 3: > 104 (At least 2 Neopixels)
    if (lightValue > 104) {
        pixels.setPixelColor(1, NeoPixelColors.White);
    }

    // Condition 4: > 156 (At least 3 Neopixels)
    if (lightValue > 156) {
        pixels.setPixelColor(2, NeoPixelColors.White);
    }

    // Condition 5: > 208 (At least 4 Neopixels)
    if (lightValue > 208) {
        pixels.setPixelColor(3, NeoPixelColors.White);
    }

    pixels.show();
    pause(100); // Small pause to prevent flickering
})