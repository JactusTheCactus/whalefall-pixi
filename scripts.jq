def flatten(level):
	if type == "string"
		then .
		elif length > 1 and level > 0
			then ("{ " + (map(flatten(level + 1)) | join(" && ")) + "; }")
		else (map(flatten(level + 1)) | join(" && "))
	end
;
map_values(flatten(0))
