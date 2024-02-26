# Tuples
# Ordered, unchageable, indexed allows duplicates

# fruits = tuple(("apple", "banana", "cherry"))
# # print(type(fruits))
# print(fruits[1])
# if "apple" in fruits:
#     print("Yes")


# log_in = input("Please Enter Password : ")
# if log_in in password:
#     print("")
# else:
#     print("")

# def password_checker(entry):
#     password = ("malaria",)
#     success = "Welcome to your dashboard"
#     failure = "Wrong password, try again"
#     message = ''
#     if entry in password:
#         message = success
#     else:
#         message = failure
#     return message


# log_in = input("Please Enter Password : ")
# print(password_checker(log_in))

# password = ("yam",)
# updater = list(password)
# updater[0] = "egg"
# updated_password = tuple(updater)
# print(type(updated_password))

# thistuple = ("apple", "banana", "cherry")
# tuple2 = ("orange","goruba")
# thistuple += tuple2
# # thistuple = thistuple + tuple2
# print(thistuple)

# cars = ("Bmw", "Acura")
# fruits = ("apple", "banana", "pepper","cherry", 56)
# # (unpacked, green) = (fruits, cars)
# # (*like,) = fruits
# # like[1] = "mango"
# # print(like)
# (*green, red,) = fruits
# print(green)


# items = {"egg", "akuya", "shanu", "rago"}
# # print(type(items))
# print(items)

# thisset = {"apple", "banana", "cherry", 1, True, 2}
# print(thisset)

# thisset = {"apple", "banana", "cherry"}
# thisset.update(["orange", "yam"])
# print(thisset) 

# thisset = {"apple", "banana", "cherry"}
# mylist = ["kiwi", "orange"]
# thisset.update(mylist)
# print(thisset) 


car =	{
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
car["color"] = "white"

car["brand"] = "Tesla"
print(car["brand"])

