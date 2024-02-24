const input = require("prompt-sync")(); // import prompt-sync module from npm Globaly

// this is introduction and greeting part for customer and for our restaurant.
console.log("Hello Sir/Mam, Welcome to our Restaurant Named 'Annapurna Bhojnalaya' ");
console.log("This is our Food Menu. So you can choose what do you want.");
console.log("\nBreakFast\nLunch\nDinner\n");

// this is a section for choose you meal type
const mealType = input("Enter you Meal Type Here, whick one listed above: ").toLowerCase()

// this is condition check for check meal type

if (mealType == "breakfast") { // this is condition check for breakfast meal type

    console.log("\nThis is our BreakFast Menu. So you can choose what do you want.");
    console.log("\nMaggie\nPhoa\nSandwich\n");

    const breakFastType = input("Enter you Break Fast Type Here, whick one listed above: ").toLowerCase()

    // this is condition check for check breakFastType

    if (breakFastType == "maggie") { // this is condition check for breakfasttype maggie

        console.log(`\nHello Sir/Mam you choose ${breakFastType.charAt(0).toUpperCase() + breakFastType.slice(1)}. So what do you want Half palte Or Full Plate of it.`);

        console.log("\nHalf Plate = 10 Rs\nFull Plate = 15 Rs\n");

        const plateType = input("Enter you Plate Type Here, whick one listed above: ").toLowerCase()

        // this is condition check for half palte or full plate

        if (plateType == "half plate") { // this is condition check for half palte

            console.log(`\nHello Sir/Mam you choose ${plateType.charAt(0).toUpperCase() + plateType.slice(1)}. So much quantity do you want of it.`);

            const PlateQuantity = Number(input("\nEnter you Plate Quantity Here in Number: \n"))

            if (PlateQuantity < 0 || isNaN(PlateQuantity)) { // this is condition to check when amount quantity is invalid
                console.log("Please Enter the valid amount of Quantity");
            } else { // this is condition to check when amount quantity is valid

                const halfPlateAmount = 10 * PlateQuantity
                console.log(`Your choose ${plateType}, and amount of ${plateType} is ${10}, Then
                Your Total amount will be ${halfPlateAmount}`);

                const userPaidAmount = Number(input("\nPlease Enter the Amount, How much you will be pay Now. \n"))

                // this is condition section to check whether the amount is equal, greater or lesser

                if (userPaidAmount > halfPlateAmount) { // this is condition to check wether the userAmount is greater
                    console.log(`your half palte amount is ${halfPlateAmount} and you paid to restuarant is ${userPaidAmount}, 
                    So we will return you ${userPaidAmount - halfPlateAmount} Rs Back to You.`);
                } else if (userPaidAmount < halfPlateAmount) { // this is condition to check wether the userAmount is lesser
                    console.log(`your half palte amount is ${halfPlateAmount} and you paid to restuarant is ${userPaidAmount}, 
                    So you need to pay ${halfPlateAmount - userPaidAmount} Rs More.`);
                } else { // this is condition to check wether the userAmount is equal
                    console.log(`your half palte amount is ${halfPlateAmount} and you paid to restuarant is ${userPaidAmount}, 
                    So you don't need to pay any amount.`);
                }

            }

        } else if (plateType == "full plate") { // this is condition check for full palte

            console.log(`\nHello Sir/Mam you choose ${plateType.charAt(0).toUpperCase() + plateType.slice(1)}. So much quantity do you want of it.`);

            const PlateQuantity = Number(input("\nEnter you Plate Quantity Here in Number: \n"))

            if (PlateQuantity < 0 || isNaN(PlateQuantity)) { // this is condition to check when amount quantity is invalid
                console.log("Please Enter the valid amount of Quantity");
            } else { // this is condition to check when amount quantity is valid

                const fullPlateAmount = 15 * PlateQuantity
                console.log(`Your choose ${plateType}, and amount of ${plateType} is ${15}, Then
                Your Total amount will be ${fullPlateAmount}`);

                const userPaidAmount = Number(input("\nPlease Enter the Amount, How much you will be pay Now. \n"))

                // this is condition section to check whether the amount is equal, greater or lesser

                if (userPaidAmount > fullPlateAmount) { // this is condition to check wether the userAmount is greater
                    console.log(`your half palte amount is ${fullPlateAmount} and you paid to restuarant is ${userPaidAmount}, 
                    So we will return you ${userPaidAmount - fullPlateAmount} Rs Back to You.`);
                } else if (userPaidAmount < fullPlateAmount) { // this is condition to check wether the userAmount is lesser
                    console.log(`your half palte amount is ${fullPlateAmount} and you paid to restuarant is ${userPaidAmount}, 
                    So you need to pay ${fullPlateAmount - userPaidAmount} Rs More.`);
                } else { // this is condition to check wether the userAmount is equal
                    console.log(`your half palte amount is ${fullPlateAmount} and you paid to restuarant is ${userPaidAmount}, 
                    So you don't need to pay any amount.`);
                }

            }

        } else { // this is condition check for invalid plate type
            console.log("Please Enter a valid Plate Type");
        }

    } else if (breakFastType == "phoa") { // this is condition check for breakfasttype poha

        console.log(`\nHello Sir/Mam you choose ${breakFastType.charAt(0).toUpperCase() + breakFastType.slice(1)}. So what do you want Half palte Or Full Plate of it.`);

        console.log("\nHalf Plate = 10 Rs\nFull Plate = 15 Rs\n");

        const plateType = input("Enter you Plate Type Here, whick one listed above: ").toLowerCase()

        // this is condition check for half palte or full plate

        if (plateType == "half plate") { // this is condition check for half palte

            console.log(`\nHello Sir/Mam you choose ${plateType.charAt(0).toUpperCase() + plateType.slice(1)}. So much quantity do you want of it.`);

            const PlateQuantity = Number(input("\nEnter you Plate Quantity Here in Number: \n"))

            if (PlateQuantity < 0 || isNaN(PlateQuantity)) { // this is condition to check when amount quantity is invalid
                console.log("Please Enter the valid amount of Quantity");
            } else { // this is condition to check when amount quantity is valid

                const halfPlateAmount = 10 * PlateQuantity
                console.log(`Your choose ${plateType}, and amount of ${plateType} is ${10}, Then
                Your Total amount will be ${halfPlateAmount}`);

                const userPaidAmount = Number(input("\nPlease Enter the Amount, How much you will be pay Now. \n"))

                // this is condition section to check whether the amount is equal, greater or lesser

                if (userPaidAmount > halfPlateAmount) { // this is condition to check wether the userAmount is greater
                    console.log(`your half palte amount is ${halfPlateAmount} and you paid to restuarant is ${userPaidAmount}, 
                    So we will return you ${userPaidAmount - halfPlateAmount} Rs Back to You.`);
                } else if (userPaidAmount < halfPlateAmount) { // this is condition to check wether the userAmount is lesser
                    console.log(`your half palte amount is ${halfPlateAmount} and you paid to restuarant is ${userPaidAmount}, 
                    So you need to pay ${halfPlateAmount - userPaidAmount} Rs More.`);
                } else { // this is condition to check wether the userAmount is equal
                    console.log(`your half palte amount is ${halfPlateAmount} and you paid to restuarant is ${userPaidAmount}, 
                    So you don't need to pay any amount.`);
                }

            }

        } else if (plateType == "full plate") { // this is condition check for full palte

            console.log(`\nHello Sir/Mam you choose ${plateType.charAt(0).toUpperCase() + plateType.slice(1)}. So much quantity do you want of it.`);

            const PlateQuantity = Number(input("\nEnter you Plate Quantity Here in Number: \n"))

            if (PlateQuantity < 0 || isNaN(PlateQuantity)) { // this is condition to check when amount quantity is invalid
                console.log("Please Enter the valid amount of Quantity");
            } else { // this is condition to check when amount quantity is valid

                const fullPlateAmount = 15 * PlateQuantity
                console.log(`Your choose ${plateType}, and amount of ${plateType} is ${15}, Then
                Your Total amount will be ${fullPlateAmount}`);

                const userPaidAmount = Number(input("\nPlease Enter the Amount, How much you will be pay Now. \n"))

                // this is condition section to check whether the amount is equal, greater or lesser

                if (userPaidAmount > fullPlateAmount) { // this is condition to check wether the userAmount is greater
                    console.log(`your half palte amount is ${fullPlateAmount} and you paid to restuarant is ${userPaidAmount}, 
                    So we will return you ${userPaidAmount - fullPlateAmount} Rs Back to You.`);
                } else if (userPaidAmount < fullPlateAmount) { // this is condition to check wether the userAmount is lesser
                    console.log(`your half palte amount is ${fullPlateAmount} and you paid to restuarant is ${userPaidAmount}, 
                    So you need to pay ${fullPlateAmount - userPaidAmount} Rs More.`);
                } else { // this is condition to check wether the userAmount is equal
                    console.log(`your half palte amount is ${fullPlateAmount} and you paid to restuarant is ${userPaidAmount}, 
                    So you don't need to pay any amount.`);
                }

            }

        } else { // this is condition check for invalid plate type
            console.log("Please Enter a valid Plate Type");
        }

    } else if (breakFastType == "sandwich") { // this is condition check for breakfasttype poha

        console.log(`\nHello Sir/Mam you choose ${breakFastType.charAt(0).toUpperCase() + breakFastType.slice(1)}. So what do you want Half palte Or Full Plate of it.`);

        console.log("\nHalf Plate = 10 Rs\nFull Plate = 15 Rs\n");

        const plateType = input("Enter you Plate Type Here, whick one listed above: ").toLowerCase()

        // this is condition check for half palte or full plate

        if (plateType == "half plate") { // this is condition check for half palte

            console.log(`\nHello Sir/Mam you choose ${plateType.charAt(0).toUpperCase() + plateType.slice(1)}. So much quantity do you want of it.`);

            const PlateQuantity = Number(input("\nEnter you Plate Quantity Here in Number: \n"))

            if (PlateQuantity < 0 || isNaN(PlateQuantity)) { // this is condition to check when amount quantity is invalid
                console.log("Please Enter the valid amount of Quantity");
            } else { // this is condition to check when amount quantity is valid

                const halfPlateAmount = 10 * PlateQuantity
                console.log(`Your choose ${plateType}, and amount of ${plateType} is ${10}, Then
                Your Total amount will be ${halfPlateAmount}`);

                const userPaidAmount = Number(input("\nPlease Enter the Amount, How much you will be pay Now. \n"))

                // this is condition section to check whether the amount is equal, greater or lesser

                if (userPaidAmount > halfPlateAmount) { // this is condition to check wether the userAmount is greater
                    console.log(`your half palte amount is ${halfPlateAmount} and you paid to restuarant is ${userPaidAmount}, 
                    So we will return you ${userPaidAmount - halfPlateAmount} Rs Back to You.`);
                } else if (userPaidAmount < halfPlateAmount) { // this is condition to check wether the userAmount is lesser
                    console.log(`your half palte amount is ${halfPlateAmount} and you paid to restuarant is ${userPaidAmount}, 
                    So you need to pay ${halfPlateAmount - userPaidAmount} Rs More.`);
                } else { // this is condition to check wether the userAmount is equal
                    console.log(`your half palte amount is ${halfPlateAmount} and you paid to restuarant is ${userPaidAmount}, 
                    So you don't need to pay any amount.`);
                }

            }

        } else if (plateType == "full plate") { // this is condition check for full palte

            console.log(`\nHello Sir/Mam you choose ${plateType.charAt(0).toUpperCase() + plateType.slice(1)}. So much quantity do you want of it.`);

            const PlateQuantity = Number(input("\nEnter you Plate Quantity Here in Number: \n"))

            if (PlateQuantity < 0 || isNaN(PlateQuantity)) { // this is condition to check when amount quantity is invalid
                console.log("Please Enter the valid amount of Quantity");
            } else { // this is condition to check when amount quantity is valid

                const fullPlateAmount = 15 * PlateQuantity
                console.log(`Your choose ${plateType}, and amount of ${plateType} is ${15}, Then
                Your Total amount will be ${fullPlateAmount}`);

                const userPaidAmount = Number(input("\nPlease Enter the Amount, How much you will be pay Now. \n"))

                // this is condition section to check whether the amount is equal, greater or lesser

                if (userPaidAmount > fullPlateAmount) { // this is condition to check wether the userAmount is greater
                    console.log(`your half palte amount is ${fullPlateAmount} and you paid to restuarant is ${userPaidAmount}, 
                    So we will return you ${userPaidAmount - fullPlateAmount} Rs Back to You.`);
                } else if (userPaidAmount < fullPlateAmount) { // this is condition to check wether the userAmount is lesser
                    console.log(`your half palte amount is ${fullPlateAmount} and you paid to restuarant is ${userPaidAmount}, 
                    So you need to pay ${fullPlateAmount - userPaidAmount} Rs More.`);
                } else { // this is condition to check wether the userAmount is equal
                    console.log(`your half palte amount is ${fullPlateAmount} and you paid to restuarant is ${userPaidAmount}, 
                    So you don't need to pay any amount.`);
                }

            }

        } else { // this is condition check for invalid plate type
            console.log("Please Enter a valid Plate Type");
        }

    } else { // this is condition check for invalid breakfasttype 
        console.log("Please Enter a valid Break Fast Type");
    }
} else if (mealType == "lunch") { // this is condition check for lunch meal type

    console.log("\nThis is our Lunch Menu. So you can choose what do you want.");
    console.log("\nKali daal\nPili daal\nGulabi daal\n");

    const lunchType = input("Enter you Lunch Type Here, whick one listed above: ").toLowerCase()

    // this is condition check for check Lunch Type

    if (lunchType == "kali daal") { // this is condition check for lunchType kali daal

        console.log(`\nHello Sir/Mam you choose ${lunchType.charAt(0).toUpperCase() + lunchType.slice(1)}. So what do you want Half palte Or Full Plate of it.`);

        console.log("\nHalf Plate = 10 Rs\nFull Plate = 15 Rs\n");

        const plateType = input("Enter you Plate Type Here, whick one listed above: ").toLowerCase()

        // this is condition check for half palte or full plate

        if (plateType == "half plate") { // this is condition check for half palte

            console.log(`\nHello Sir/Mam you choose ${plateType.charAt(0).toUpperCase() + plateType.slice(1)}. So much quantity do you want of it.`);

            const PlateQuantity = Number(input("\nEnter you Plate Quantity Here in Number: \n"))

            if (PlateQuantity < 0 || isNaN(PlateQuantity)) { // this is condition to check when amount quantity is invalid
                console.log("Please Enter the valid amount of Quantity");
            } else { // this is condition to check when amount quantity is valid

                const halfPlateAmount = 10 * PlateQuantity
                console.log(`Your choose ${plateType}, and amount of ${plateType} is ${10}, Then
                Your Total amount will be ${halfPlateAmount}`);

                const userPaidAmount = Number(input("\nPlease Enter the Amount, How much you will be pay Now. \n"))

                // this is condition section to check whether the amount is equal, greater or lesser

                if (userPaidAmount > halfPlateAmount) { // this is condition to check wether the userAmount is greater
                    console.log(`your half palte amount is ${halfPlateAmount} and you paid to restuarant is ${userPaidAmount}, 
                    So we will return you ${userPaidAmount - halfPlateAmount} Rs Back to You.`);
                } else if (userPaidAmount < halfPlateAmount) { // this is condition to check wether the userAmount is lesser
                    console.log(`your half palte amount is ${halfPlateAmount} and you paid to restuarant is ${userPaidAmount}, 
                    So you need to pay ${halfPlateAmount - userPaidAmount} Rs More.`);
                } else { // this is condition to check wether the userAmount is equal
                    console.log(`your half palte amount is ${halfPlateAmount} and you paid to restuarant is ${userPaidAmount}, 
                    So you don't need to pay any amount.`);
                }

            }

        } else if (plateType == "full plate") { // this is condition check for full palte

            console.log(`\nHello Sir/Mam you choose ${plateType.charAt(0).toUpperCase() + plateType.slice(1)}. So much quantity do you want of it.`);

            const PlateQuantity = Number(input("\nEnter you Plate Quantity Here in Number: \n"))

            if (PlateQuantity < 0 || isNaN(PlateQuantity)) { // this is condition to check when amount quantity is invalid
                console.log("Please Enter the valid amount of Quantity");
            } else { // this is condition to check when amount quantity is valid

                const fullPlateAmount = 15 * PlateQuantity
                console.log(`Your choose ${plateType}, and amount of ${plateType} is ${15}, Then
                Your Total amount will be ${fullPlateAmount}`);

                const userPaidAmount = Number(input("\nPlease Enter the Amount, How much you will be pay Now. \n"))

                // this is condition section to check whether the amount is equal, greater or lesser

                if (userPaidAmount > fullPlateAmount) { // this is condition to check wether the userAmount is greater
                    console.log(`your half palte amount is ${fullPlateAmount} and you paid to restuarant is ${userPaidAmount}, 
                    So we will return you ${userPaidAmount - fullPlateAmount} Rs Back to You.`);
                } else if (userPaidAmount < fullPlateAmount) { // this is condition to check wether the userAmount is lesser
                    console.log(`your half palte amount is ${fullPlateAmount} and you paid to restuarant is ${userPaidAmount}, 
                    So you need to pay ${fullPlateAmount - userPaidAmount} Rs More.`);
                } else { // this is condition to check wether the userAmount is equal
                    console.log(`your half palte amount is ${fullPlateAmount} and you paid to restuarant is ${userPaidAmount}, 
                    So you don't need to pay any amount.`);
                }

            }

        } else { // this is condition check for invalid plate type
            console.log("Please Enter a valid Plate Type");
        }

    } else if (lunchType == "pili daal") { // this is condition check for lunchType pili daal

        console.log(`\nHello Sir/Mam you choose ${lunchType.charAt(0).toUpperCase() + lunchType.slice(1)}. So what do you want Half palte Or Full Plate of it.`);

        console.log("\nHalf Plate = 10 Rs\nFull Plate = 15 Rs\n");

        const plateType = input("Enter you Plate Type Here, whick one listed above: ").toLowerCase()

        // this is condition check for half palte or full plate

        if (plateType == "half plate") { // this is condition check for half palte

            console.log(`\nHello Sir/Mam you choose ${plateType.charAt(0).toUpperCase() + plateType.slice(1)}. So much quantity do you want of it.`);

            const PlateQuantity = Number(input("\nEnter you Plate Quantity Here in Number: \n"))

            if (PlateQuantity < 0 || isNaN(PlateQuantity)) { // this is condition to check when amount quantity is invalid
                console.log("Please Enter the valid amount of Quantity");
            } else { // this is condition to check when amount quantity is valid

                const halfPlateAmount = 10 * PlateQuantity
                console.log(`Your choose ${plateType}, and amount of ${plateType} is ${10}, Then
                Your Total amount will be ${halfPlateAmount}`);

                const userPaidAmount = Number(input("\nPlease Enter the Amount, How much you will be pay Now. \n"))

                // this is condition section to check whether the amount is equal, greater or lesser

                if (userPaidAmount > halfPlateAmount) { // this is condition to check wether the userAmount is greater
                    console.log(`your half palte amount is ${halfPlateAmount} and you paid to restuarant is ${userPaidAmount}, 
                    So we will return you ${userPaidAmount - halfPlateAmount} Rs Back to You.`);
                } else if (userPaidAmount < halfPlateAmount) { // this is condition to check wether the userAmount is lesser
                    console.log(`your half palte amount is ${halfPlateAmount} and you paid to restuarant is ${userPaidAmount}, 
                    So you need to pay ${halfPlateAmount - userPaidAmount} Rs More.`);
                } else { // this is condition to check wether the userAmount is equal
                    console.log(`your half palte amount is ${halfPlateAmount} and you paid to restuarant is ${userPaidAmount}, 
                    So you don't need to pay any amount.`);
                }

            }

        } else if (plateType == "full plate") { // this is condition check for full palte

            console.log(`\nHello Sir/Mam you choose ${plateType.charAt(0).toUpperCase() + plateType.slice(1)}. So much quantity do you want of it.`);

            const PlateQuantity = Number(input("\nEnter you Plate Quantity Here in Number: \n"))

            if (PlateQuantity < 0 || isNaN(PlateQuantity)) { // this is condition to check when amount quantity is invalid
                console.log("Please Enter the valid amount of Quantity");
            } else { // this is condition to check when amount quantity is valid

                const fullPlateAmount = 15 * PlateQuantity
                console.log(`Your choose ${plateType}, and amount of ${plateType} is ${15}, Then
                Your Total amount will be ${fullPlateAmount}`);

                const userPaidAmount = Number(input("\nPlease Enter the Amount, How much you will be pay Now. \n"))

                // this is condition section to check whether the amount is equal, greater or lesser

                if (userPaidAmount > fullPlateAmount) { // this is condition to check wether the userAmount is greater
                    console.log(`your half palte amount is ${fullPlateAmount} and you paid to restuarant is ${userPaidAmount}, 
                    So we will return you ${userPaidAmount - fullPlateAmount} Rs Back to You.`);
                } else if (userPaidAmount < fullPlateAmount) { // this is condition to check wether the userAmount is lesser
                    console.log(`your half palte amount is ${fullPlateAmount} and you paid to restuarant is ${userPaidAmount}, 
                    So you need to pay ${fullPlateAmount - userPaidAmount} Rs More.`);
                } else { // this is condition to check wether the userAmount is equal
                    console.log(`your half palte amount is ${fullPlateAmount} and you paid to restuarant is ${userPaidAmount}, 
                    So you don't need to pay any amount.`);
                }

            }

        } else { // this is condition check for invalid plate type
            console.log("Please Enter a valid Plate Type");
        }

    } else if (lunchType == "gulabi daal") { // this is condition check for lunchType poha

        console.log(`\nHello Sir/Mam you choose ${lunchType.charAt(0).toUpperCase() + lunchType.slice(1)}. So what do you want Half palte Or Full Plate of it.`);

        console.log("\nHalf Plate = 10 Rs\nFull Plate = 15 Rs\n");

        const plateType = input("Enter you Plate Type Here, whick one listed above: ").toLowerCase()

        // this is condition check for half palte or full plate

        if (plateType == "half plate") { // this is condition check for half palte

            console.log(`\nHello Sir/Mam you choose ${plateType.charAt(0).toUpperCase() + plateType.slice(1)}. So much quantity do you want of it.`);

            const PlateQuantity = Number(input("\nEnter you Plate Quantity Here in Number: \n"))

            if (PlateQuantity < 0 || isNaN(PlateQuantity)) { // this is condition to check when amount quantity is invalid
                console.log("Please Enter the valid amount of Quantity");
            } else { // this is condition to check when amount quantity is valid

                const halfPlateAmount = 10 * PlateQuantity
                console.log(`Your choose ${plateType}, and amount of ${plateType} is ${10}, Then
                Your Total amount will be ${halfPlateAmount}`);

                const userPaidAmount = Number(input("\nPlease Enter the Amount, How much you will be pay Now. \n"))

                // this is condition section to check whether the amount is equal, greater or lesser

                if (userPaidAmount > halfPlateAmount) { // this is condition to check wether the userAmount is greater
                    console.log(`your half palte amount is ${halfPlateAmount} and you paid to restuarant is ${userPaidAmount}, 
                    So we will return you ${userPaidAmount - halfPlateAmount} Rs Back to You.`);
                } else if (userPaidAmount < halfPlateAmount) { // this is condition to check wether the userAmount is lesser
                    console.log(`your half palte amount is ${halfPlateAmount} and you paid to restuarant is ${userPaidAmount}, 
                    So you need to pay ${halfPlateAmount - userPaidAmount} Rs More.`);
                } else { // this is condition to check wether the userAmount is equal
                    console.log(`your half palte amount is ${halfPlateAmount} and you paid to restuarant is ${userPaidAmount}, 
                    So you don't need to pay any amount.`);
                }

            }

        } else if (plateType == "full plate") { // this is condition check for full palte

            console.log(`\nHello Sir/Mam you choose ${plateType.charAt(0).toUpperCase() + plateType.slice(1)}. So much quantity do you want of it.`);

            const PlateQuantity = Number(input("\nEnter you Plate Quantity Here in Number: \n"))

            if (PlateQuantity < 0 || isNaN(PlateQuantity)) { // this is condition to check when amount quantity is invalid
                console.log("Please Enter the valid amount of Quantity");
            } else { // this is condition to check when amount quantity is valid

                const fullPlateAmount = 15 * PlateQuantity
                console.log(`Your choose ${plateType}, and amount of ${plateType} is ${15}, Then
                Your Total amount will be ${fullPlateAmount}`);

                const userPaidAmount = Number(input("\nPlease Enter the Amount, How much you will be pay Now. \n"))

                // this is condition section to check whether the amount is equal, greater or lesser

                if (userPaidAmount > fullPlateAmount) { // this is condition to check wether the userAmount is greater
                    console.log(`your half palte amount is ${fullPlateAmount} and you paid to restuarant is ${userPaidAmount}, 
                    So we will return you ${userPaidAmount - fullPlateAmount} Rs Back to You.`);
                } else if (userPaidAmount < fullPlateAmount) { // this is condition to check wether the userAmount is lesser
                    console.log(`your half palte amount is ${fullPlateAmount} and you paid to restuarant is ${userPaidAmount}, 
                    So you need to pay ${fullPlateAmount - userPaidAmount} Rs More.`);
                } else { // this is condition to check wether the userAmount is equal
                    console.log(`your half palte amount is ${fullPlateAmount} and you paid to restuarant is ${userPaidAmount}, 
                    So you don't need to pay any amount.`);
                }

            }

        } else { // this is condition check for invalid plate type
            console.log("Please Enter a valid Plate Type");
        }

    } else { // this is condition check for invalid breakfasttype 
        console.log("Please Enter a valid Break Fast Type");
    }
} else if (mealType == "dinner") { // this is condition check for dinner meal type

    console.log("\nThis is our Dinner Menu. So you can choose what do you want.");
    console.log("\nMatar Paneer\nPalak Paneer\nSahi Paneer\n");

    const dinnerType = input("Enter you Dinner Type Here, whick one listed above: ").toLowerCase()

    // this is condition check for check dinnerType

    if (dinnerType == "matar paneer") { // this is condition check for dinnerType matar paneer

        console.log(`\nHello Sir/Mam you choose ${dinnerType.charAt(0).toUpperCase() + dinnerType.slice(1)}. So what do you want Half palte Or Full Plate of it.`);

        console.log("\nHalf Plate = 10 Rs\nFull Plate = 15 Rs\n");

        const plateType = input("Enter you Plate Type Here, whick one listed above: ").toLowerCase()

        // this is condition check for half palte or full plate

        if (plateType == "half plate") { // this is condition check for half palte

            console.log(`\nHello Sir/Mam you choose ${plateType.charAt(0).toUpperCase() + plateType.slice(1)}. So much quantity do you want of it.`);

            const PlateQuantity = Number(input("\nEnter you Plate Quantity Here in Number: \n"))

            if (PlateQuantity < 0 || isNaN(PlateQuantity)) { // this is condition to check when amount quantity is invalid
                console.log("Please Enter the valid amount of Quantity");
            } else { // this is condition to check when amount quantity is valid

                const halfPlateAmount = 10 * PlateQuantity
                console.log(`Your choose ${plateType}, and amount of ${plateType} is ${10}, Then
                Your Total amount will be ${halfPlateAmount}`);

                const userPaidAmount = Number(input("\nPlease Enter the Amount, How much you will be pay Now. \n"))

                // this is condition section to check whether the amount is equal, greater or lesser

                if (userPaidAmount > halfPlateAmount) { // this is condition to check wether the userAmount is greater
                    console.log(`your half palte amount is ${halfPlateAmount} and you paid to restuarant is ${userPaidAmount}, 
                    So we will return you ${userPaidAmount - halfPlateAmount} Rs Back to You.`);
                } else if (userPaidAmount < halfPlateAmount) { // this is condition to check wether the userAmount is lesser
                    console.log(`your half palte amount is ${halfPlateAmount} and you paid to restuarant is ${userPaidAmount}, 
                    So you need to pay ${halfPlateAmount - userPaidAmount} Rs More.`);
                } else { // this is condition to check wether the userAmount is equal
                    console.log(`your half palte amount is ${halfPlateAmount} and you paid to restuarant is ${userPaidAmount}, 
                    So you don't need to pay any amount.`);
                }

            }

        } else if (plateType == "full plate") { // this is condition check for full palte

            console.log(`\nHello Sir/Mam you choose ${plateType.charAt(0).toUpperCase() + plateType.slice(1)}. So much quantity do you want of it.`);

            const PlateQuantity = Number(input("\nEnter you Plate Quantity Here in Number: \n"))

            if (PlateQuantity < 0 || isNaN(PlateQuantity)) { // this is condition to check when amount quantity is invalid
                console.log("Please Enter the valid amount of Quantity");
            } else { // this is condition to check when amount quantity is valid

                const fullPlateAmount = 15 * PlateQuantity
                console.log(`Your choose ${plateType}, and amount of ${plateType} is ${15}, Then
                Your Total amount will be ${fullPlateAmount}`);

                const userPaidAmount = Number(input("\nPlease Enter the Amount, How much you will be pay Now. \n"))

                // this is condition section to check whether the amount is equal, greater or lesser

                if (userPaidAmount > fullPlateAmount) { // this is condition to check wether the userAmount is greater
                    console.log(`your half palte amount is ${fullPlateAmount} and you paid to restuarant is ${userPaidAmount}, 
                    So we will return you ${userPaidAmount - fullPlateAmount} Rs Back to You.`);
                } else if (userPaidAmount < fullPlateAmount) { // this is condition to check wether the userAmount is lesser
                    console.log(`your half palte amount is ${fullPlateAmount} and you paid to restuarant is ${userPaidAmount}, 
                    So you need to pay ${fullPlateAmount - userPaidAmount} Rs More.`);
                } else { // this is condition to check wether the userAmount is equal
                    console.log(`your half palte amount is ${fullPlateAmount} and you paid to restuarant is ${userPaidAmount}, 
                    So you don't need to pay any amount.`);
                }

            }

        } else { // this is condition check for invalid plate type
            console.log("Please Enter a valid Plate Type");
        }

    } else if (dinnerType == "palak paneer") { // this is condition check for dinnerType palak paneer

        console.log(`\nHello Sir/Mam you choose ${dinnerType.charAt(0).toUpperCase() + dinnerType.slice(1)}. So what do you want Half palte Or Full Plate of it.`);

        console.log("\nHalf Plate = 10 Rs\nFull Plate = 15 Rs\n");

        const plateType = input("Enter you Plate Type Here, whick one listed above: ").toLowerCase()

        // this is condition check for half palte or full plate

        if (plateType == "half plate") { // this is condition check for half palte

            console.log(`\nHello Sir/Mam you choose ${plateType.charAt(0).toUpperCase() + plateType.slice(1)}. So much quantity do you want of it.`);

            const PlateQuantity = Number(input("\nEnter you Plate Quantity Here in Number: \n"))

            if (PlateQuantity < 0 || isNaN(PlateQuantity)) { // this is condition to check when amount quantity is invalid
                console.log("Please Enter the valid amount of Quantity");
            } else { // this is condition to check when amount quantity is valid

                const halfPlateAmount = 10 * PlateQuantity
                console.log(`Your choose ${plateType}, and amount of ${plateType} is ${10}, Then
                Your Total amount will be ${halfPlateAmount}`);

                const userPaidAmount = Number(input("\nPlease Enter the Amount, How much you will be pay Now. \n"))

                // this is condition section to check whether the amount is equal, greater or lesser

                if (userPaidAmount > halfPlateAmount) { // this is condition to check wether the userAmount is greater
                    console.log(`your half palte amount is ${halfPlateAmount} and you paid to restuarant is ${userPaidAmount}, 
                    So we will return you ${userPaidAmount - halfPlateAmount} Rs Back to You.`);
                } else if (userPaidAmount < halfPlateAmount) { // this is condition to check wether the userAmount is lesser
                    console.log(`your half palte amount is ${halfPlateAmount} and you paid to restuarant is ${userPaidAmount}, 
                    So you need to pay ${halfPlateAmount - userPaidAmount} Rs More.`);
                } else { // this is condition to check wether the userAmount is equal
                    console.log(`your half palte amount is ${halfPlateAmount} and you paid to restuarant is ${userPaidAmount}, 
                    So you don't need to pay any amount.`);
                }

            }

        } else if (plateType == "full plate") { // this is condition check for full palte

            console.log(`\nHello Sir/Mam you choose ${plateType.charAt(0).toUpperCase() + plateType.slice(1)}. So much quantity do you want of it.`);

            const PlateQuantity = Number(input("\nEnter you Plate Quantity Here in Number: \n"))

            if (PlateQuantity < 0 || isNaN(PlateQuantity)) { // this is condition to check when amount quantity is invalid
                console.log("Please Enter the valid amount of Quantity");
            } else { // this is condition to check when amount quantity is valid

                const fullPlateAmount = 15 * PlateQuantity
                console.log(`Your choose ${plateType}, and amount of ${plateType} is ${15}, Then
                Your Total amount will be ${fullPlateAmount}`);

                const userPaidAmount = Number(input("\nPlease Enter the Amount, How much you will be pay Now. \n"))

                // this is condition section to check whether the amount is equal, greater or lesser

                if (userPaidAmount > fullPlateAmount) { // this is condition to check wether the userAmount is greater
                    console.log(`your half palte amount is ${fullPlateAmount} and you paid to restuarant is ${userPaidAmount}, 
                    So we will return you ${userPaidAmount - fullPlateAmount} Rs Back to You.`);
                } else if (userPaidAmount < fullPlateAmount) { // this is condition to check wether the userAmount is lesser
                    console.log(`your half palte amount is ${fullPlateAmount} and you paid to restuarant is ${userPaidAmount}, 
                    So you need to pay ${fullPlateAmount - userPaidAmount} Rs More.`);
                } else { // this is condition to check wether the userAmount is equal
                    console.log(`your half palte amount is ${fullPlateAmount} and you paid to restuarant is ${userPaidAmount}, 
                    So you don't need to pay any amount.`);
                }

            }

        } else { // this is condition check for invalid plate type
            console.log("Please Enter a valid Plate Type");
        }

    } else if (dinnerType == "sahi paneer") { // this is condition check for dinnerType sahi paneer

        console.log(`\nHello Sir/Mam you choose ${dinnerType.charAt(0).toUpperCase() + dinnerType.slice(1)}. So what do you want Half palte Or Full Plate of it.`);

        console.log("\nHalf Plate = 10 Rs\nFull Plate = 15 Rs\n");

        const plateType = input("Enter you Plate Type Here, whick one listed above: ").toLowerCase()

        // this is condition check for half palte or full plate

        if (plateType == "half plate") { // this is condition check for half palte

            console.log(`\nHello Sir/Mam you choose ${plateType.charAt(0).toUpperCase() + plateType.slice(1)}. So much quantity do you want of it.`);

            const PlateQuantity = Number(input("\nEnter you Plate Quantity Here in Number: \n"))

            if (PlateQuantity < 0 || isNaN(PlateQuantity)) { // this is condition to check when amount quantity is invalid
                console.log("Please Enter the valid amount of Quantity");
            } else { // this is condition to check when amount quantity is valid

                const halfPlateAmount = 10 * PlateQuantity
                console.log(`Your choose ${plateType}, and amount of ${plateType} is ${10}, Then
                Your Total amount will be ${halfPlateAmount}`);

                const userPaidAmount = Number(input("\nPlease Enter the Amount, How much you will be pay Now. \n"))

                // this is condition section to check whether the amount is equal, greater or lesser

                if (userPaidAmount > halfPlateAmount) { // this is condition to check wether the userAmount is greater
                    console.log(`your half palte amount is ${halfPlateAmount} and you paid to restuarant is ${userPaidAmount}, 
                    So we will return you ${userPaidAmount - halfPlateAmount} Rs Back to You.`);
                } else if (userPaidAmount < halfPlateAmount) { // this is condition to check wether the userAmount is lesser
                    console.log(`your half palte amount is ${halfPlateAmount} and you paid to restuarant is ${userPaidAmount}, 
                    So you need to pay ${halfPlateAmount - userPaidAmount} Rs More.`);
                } else { // this is condition to check wether the userAmount is equal
                    console.log(`your half palte amount is ${halfPlateAmount} and you paid to restuarant is ${userPaidAmount}, 
                    So you don't need to pay any amount.`);
                }

            }

        } else if (plateType == "full plate") { // this is condition check for full palte

            console.log(`\nHello Sir/Mam you choose ${plateType.charAt(0).toUpperCase() + plateType.slice(1)}. So much quantity do you want of it.`);

            const PlateQuantity = Number(input("\nEnter you Plate Quantity Here in Number: \n"))

            if (PlateQuantity < 0 || isNaN(PlateQuantity)) { // this is condition to check when amount quantity is invalid
                console.log("Please Enter the valid amount of Quantity");
            } else { // this is condition to check when amount quantity is valid

                const fullPlateAmount = 15 * PlateQuantity
                console.log(`Your choose ${plateType}, and amount of ${plateType} is ${15}, Then
                Your Total amount will be ${fullPlateAmount}`);

                const userPaidAmount = Number(input("\nPlease Enter the Amount, How much you will be pay Now. \n"))

                // this is condition section to check whether the amount is equal, greater or lesser

                if (userPaidAmount > fullPlateAmount) { // this is condition to check wether the userAmount is greater
                    console.log(`your half palte amount is ${fullPlateAmount} and you paid to restuarant is ${userPaidAmount}, 
                    So we will return you ${userPaidAmount - fullPlateAmount} Rs Back to You.`);
                } else if (userPaidAmount < fullPlateAmount) { // this is condition to check wether the userAmount is lesser
                    console.log(`your half palte amount is ${fullPlateAmount} and you paid to restuarant is ${userPaidAmount}, 
                    So you need to pay ${fullPlateAmount - userPaidAmount} Rs More.`);
                } else { // this is condition to check wether the userAmount is equal
                    console.log(`your half palte amount is ${fullPlateAmount} and you paid to restuarant is ${userPaidAmount}, 
                    So you don't need to pay any amount.`);
                }

            }

        } else { // this is condition check for invalid plate type
            console.log("Please Enter a valid Plate Type");
        }

    } else { // this is condition check for invalid breakfasttype 
        console.log("Please Enter a valid Break Fast Type");
    }
} else { // this is condition check for invalid meal type
    console.log("Please Enter a valid Meal Type");
}

