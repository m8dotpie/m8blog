has:
	cabal new-install --overwrite-policy=always
	site clean
	site build

other:
	site clean
	site build
	site watch
