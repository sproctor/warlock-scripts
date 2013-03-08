if not exists %instrument then setvariable instrument lyre
if not exists %playlevel then setvariable playlevel 1
if %playlevel < 1 then setVariable playlevel 1
goto START

GET:
match NOTFOUND What were you referring to?
match DOPLAY You are already holding that.
match DOPLAY You get a
put get my %instrument
matchwait

START:
gosub set%playlevel
DOPLAY:
match GET Play on what
match CHECKEXP You finish
match HARDER You effortlessly begin
match HARDER your skill in your craft
match EASIER You fumble slightly as you begin
match EASIER You struggle to begin
put play %diff
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
exit

HARDER:
	put stop play
	counter set %playlevel
	counter add 1
	setVariable playlevel %c
	goto START

EASIER:
	put stop play
	counter set %playlevel
	counter subtract 1
	setVariable playlevel %c
	goto START

set0:
	echo You need to find an easier instrument
	exit

set1:
	setvariable diff ruff off-key
	echo
	echo You may wish to find an easier instrument.
	echo The easiest string, percussion, and wind instruments:
	echo Lyre, guiro, and txistu, respectively
	echo
	return

set2:
	setvariable diff rudiments off-key
	return

set3:
	setvariable diff ditty off-key
	return

set4:
	setvariable diff folk off-key
	return

set5:
	setvariable diff ballad off-key
	return

set6:
	setvariable diff waltz off-key
	return

set7:
	setvariable diff lullaby off-key
	return

set8:
	setvariable diff march off-key
	return

set9:
	setvariable diff jig off-key
	return

set10:
	setvariable diff lament off-key
	return

set11:
	setvariable diff wedding off-key
	return

set12:
	setvariable diff hymn off-key
	return

set13:
	setvariable diff rumba off-key
	return

set14:
	setvariable diff polka off-key
	return

set15:
	setvariable diff battle off-key
	return

set16:
	setvariable diff polka halting
	return

set17:
	setvariable diff rumba
	return

set18:
	setvariable diff polka
	return

set19:
	setvariable diff battle
	return

set20:
	setvariable diff reel
	return

set21:
	setvariable diff elegy
	return

set22:
	setvariable diff serenade
	return

set23:
	setvariable diff minuet
	return

set24:
	setvariable diff psalm
	return

set25:
	setvariable diff dirge
	return

set26:
	setvariable diff gavotte
	return

set27:
	setvariable diff tango
	return

set28:
	setvariable diff tarantella
	return

set29:
	setvariable diff bolero
	return

set30:
	setvariable diff nocturne
	return

set31:
	setvariable diff requiem
	return

set32:
	setvariable diff fantasia
	return

set33:
	setvariable diff rondo
	return

set34:
	setvariable diff aria
	return

set35:
	setvariable diff sonata
	return

set36:
	setvariable diff concerto
	return

set37:
	setvariable diff aria confident
	return

set38:
	setvariable diff fantasia masterful
	return

set39:
	setvariable diff rondo masterful
	return

set40:
	setvariable diff aria masterful
	return

set41:
	setvariable diff sonata masterful
	return

set42:
	setvariable diff concerto masterful
	return

set43:
	echo find a harder instrument
	exit
