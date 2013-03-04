setvariable instrument lyre
setvariable song ditty
setvariable mood quiet

START:
match NOTFOUND What were you referring to?
match DOPLAY You are already holding that.
match DOPLAY You get a
put get my %instrument
matchwait

DOPLAY:
put play %song %mood
match CHECKEXP You finish
matchwait

CHECKEXP:
match WAITEXP mind lock
match DOPLAY state of mind
put exp performance
matchwait

WAITEXP:
pause 300
goto CHECKEXP

NOTFOUND:
echo ERROR!!! No valid instrument.
