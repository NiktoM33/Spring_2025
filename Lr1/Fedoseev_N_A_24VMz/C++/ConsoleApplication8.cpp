#include <iostream>
using namespace std;

int main()
{
    setlocale(LC_ALL, "Russian");
    short res = 0;              //Переменная для проверки решена ли задача
    string str = "((2)dfs)df";  //Строка для теста

    if (str.length() == 0) {            //Проверка строки
        cout << "Ошибка";
        return 0;
    }

    for (int i = 0; i < str.length(); i++) {  //Цикл для проверки каждого
        if (res < 0) {
            cout << "Строка не сбалансирована";
            break;
        }
        if (str[i] == '(') {
            res++;
        }
        else if (str[i] == ')') {
            res--;
        }
    }

    if (res == 0) {                       //Цикл для вывода результата
        cout << "Все гуд";
    }
    else {
        cout << "Ошибка";
    }

    return 0;
}
