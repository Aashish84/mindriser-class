def toh( n , s , a , d):
    if(n==1):
        print("move disk 1 from "+ str(s) +" -> "+ str(d) )
        return n
    toh(n-1 , s , d, a)
    print("move disk "+ str(n) +" from "+ str(s) +" -> "+ str(d) )
    toh(n-1 , a , s , d)

num = 3
toh(num , "SRC" , "AUX" , "DEST")

        
