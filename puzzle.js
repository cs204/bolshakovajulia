const {проверка_моделей,  Символ, Не, И, Или, Импликация, Эквивалентность} = require('./logic.js')

АРыцарь = new Символ("А - рыцарь.")
АЛжец = new Символ("А - лжец.")

БРыцарь = new Символ("Б - рыцарь.")
БЛжец = new Символ("Б - лжец.")

ВРыцарь = new Символ("В - рыцарь.")
ВЛжец = new Символ("В - лжец.")

// Задача 0
// А сказал: "Я и лжец и рыцарь."
знания0 = new И()
знания0.добавить(new Эквивалентность(АРыцарь, new Не(АЛжец)))
знания0.добавить(new Эквивалентность(new И(АРыцарь, АЛжец), АРыцарь))
// Добавьте

// Задача 1
// А сказал: "Мы оба лжецы."
// Б ни чего не сказал.
знания1 = new И()
знания1.добавить(new Эквивалентность(АРыцарь, new Не(АЛжец)))
знания1.добавить(new Эквивалентность(БЛжец, new Не(БРыцарь)))
знания1.добавить(new Эквивалентность(new И(АЛжец, БЛжец), АРыцарь))
 // Добавьте

// Задача 2
// А сказал: "Мы одинаковые."
// Б сказал: "Мы разного вида."
знания2 = new И()
знания2 = new И()
знания2.добавить(new Эквивалентность(АЛжец, new Не(АРыцарь)))
знания2.добавить(new Эквивалентность(БРыцарь, new Не(БЛжец)))
знания2.добавить(new Эквивалентность(new И(АЛжец, БЛжец), АРыцарь))
знания2.добавить(new Эквивалентность(new И(АЛжец, БРыцарь), БРыцарь))
    // Добавьте
// Задача 3

// А сказал, но мы вы не услышали.
// Б сказал: "А сказал 'Я лжец'."
// Б сказал: "В - лжец."
// В сказал: "А - рыцарь."
знания3 = new И()
знания3.добавить(БЛжец)
знания3.добавить(АРыцарь)
знания3.добавить(new Эквивалентность(АРыцарь, new Не(АЛжец)))
знания3.добавить(new Эквивалентность(ВЛжец, new Не(ВРыцарь)))
знания3.добавить(new Импликация(АРыцарь, new Не(АЛжец)))
знания3.добавить(new Импликация(АРыцарь, new Не(ВЛжец)))
знания3.добавить(new Эквивалентность(new И(АЛжец, ВЛжец), БРыцарь))
// Добавьте


символы = [АРыцарь, АЛжец, БРыцарь, БЛжец, ВРыцарь, ВЛжец]
задания = {
        "Задание 0": знания0,
        "Задание 1": знания1,
        "Задание 2": знания2,
        "Задание 3": знания3
    }

main()


function main()
{
	for(let задание in задания)
	{
		console.log(задание)
		if(задания[задание].операнды.length == 0)
		    console.log("    Пока не реализована.")
		else
		    for(let  символ of символы)
			if(проверка_моделей(задания[задание], символ))
			    console.log(`    ${символ.имя}`)
	}
}

