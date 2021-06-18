describe('Registration inputs', function(){
    it('Should be able to match with the regular expresion of registration',function(){
    let plates = registrationNumbers()
    plates.storePlates("CA 123 456")
    assert.equal("CA 123 456", plates.getStorePlates());
    });
    
    it('Should set registration numbers to uppercase', function(){
    let plates = registrationNumbers()
    plates.storePlates("cf 1456")
    assert.equal(plates.getStorePlates(), 'CF 1456');
    });
    
    it('Should check if registrations are not duplicates', function(){
    let plates = registrationNumbers()
    plates.storePlates("CA 123 456")
    plates.storePlates("CA 953 890")
    plates.storePlates("CJ 001 536")
    plates.storePlates("CJ 001 536")
    plates.storePlates("CF 123 556")
    assert.deepEqual(plates.getStorePlates(), ['CA 123 456', 'CA 953 890','CJ 001 536', 'CF 123 456']);
    });
    
    it('Should display registration numbers only from Cape town-CA', function(){
    let plates = registrationNumbers()
    plates.storePlates("ca 758 925")
    plates.storePlates("CA 563-859")
    plates.storePlates("cj 758 889")
    plates.storePlates("cf 785 472")
    assert.deepEqual(plates.getfilteredList1(), ['CA 7589', 'CA 563-859']);
    })

    it('Should display registration numbers only from Kraaifontein-CF', function(){
    let plates = registrationNumbers()
    plates.storePlates("cf 558-365")
    plates.storePlates("CF 563-859")
    plates.storePlates("cj 758 889")
    plates.storePlates("ca 782-652")
    assert.deepEqual(plates.getfilteredList2(), ['CF 558-365', 'CF 563-859']);
    })

    it('Should display registration numbers only from Paarl-CJ', function(){
    let plates = registrationNumbers()
    plates.storePlates("cj 706 589")
    plates.storePlates("CJ 563-859")
    plates.storePlates("cf 758 889")
    plates.storePlates("ca 7852")
    assert.deepEqual(plates.getfilteredList3(), ['CJ 706 589', 'CJ 563-859']);
    })
});