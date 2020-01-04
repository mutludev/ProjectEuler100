total = 0
for i in range(0,1000,3):
    total += i

for i in range(0,1000,5):
    if i%15 == 0:
        continue
    total+=i
print(total)