setvariable instrument lyre
setvariable song ditty
setvariable mood quiet
goto START

GET:
match NOTFOUND What were you referring to?
match DOPLAY You are already holding that.
match DOPLAY You get a
put get my %instrument
matchwait

START:
DOPLAY:
put play %song %mood
match GET Play on what
match CHECKEXP You finish
matchwait

CHECKEXP:
match WAITEXP mind lock
match DOPLAY state of mind
put exp performance
matchwait

WAITEXP:
echo Waiting for exp to absorb
pause 60
goto CHECKEXP

NOTFOUND:
echo ERROR!!! No valid instrument.
