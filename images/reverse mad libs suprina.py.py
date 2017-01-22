# String and its Answers to be filled in starter level
starter_answer = ["python" , "udacity" , "programming" , "2", "fun"]
stringstarter = "\nHello player!!! My name is suprina kaur. This game uses  __1__ \
 programming language which I have learned from www. __2__ .com. I am pursuing intro to __3__\
 nanodegree. This is my stage __4__ submission. I hope you will have __5__."

# String and its Answers to be filled in intermediate level
intermediate_answer = ["tourist" , "leisure" , "burj-khalifa" , "crime"]
stringIntermediate =  "Dubai now proudly stands as a premier business and __1__ destination\
 offering highly sophisticated infrastructure, best in class shopping, dining and __2__facilities\
  awe-inspiring skyscrapers including __3__ the world’s tallest building\
   and most of all,__4__ free and expat-friendly environment."


# String and its Answers to be filled in trained level
trained_answer = ["Play" , "Google" , "Android" , "digital"]
stringtrained = "The Google __1__Store or Google Play (originally as the Android Market)\
 is a digital distribution service operated and developed by __2__ . \
 It serves as the official app store for the __3__ operating system, allowing users to browse and download applications \
 developed with the Android SDK and published through Google. Google Play also serves as a __4__ media store, offering music,\
  magazines, books, movies, and television programs."

# String and its Answers to be filled in experienced level
experienced_answer = ["Walt" , "fun" , " magical" , "8", "War"]
stringExperienced = "One day __1__ Disney had a vision. \
It was a vision of a place where children and parents could have __2__ together.\
 The more Walt dreamed of a “__3__ park,” the more imaginative and elaborate it became.\
 The original plans for the park were on __4__ acres next to the Burbank studios where his employees and families could go to relax.\
  Although, World War II put those plans on hold. During the __5__, Walt had time to come up with new ideas, and creations, for his magical park."

# String and its Answers to be filled in expert level
expert_answer = ["18" , "play" , "james" , "physical" ]
stringExpert = "basketball is a game that started with __1__ men in a YMCA gymnasium\
 in Springfield, Massachusetts, has grown into a game that more than 300 million people __2__ worldwide.\
  The man who created this instantly successful sport was Dr. __3__ Naismith.\
  Under instructions from the head of __4__ education at the School for Christian Workers, Naismith was given two weeks."

def run(answer , quiz_string):
	'''
	This is the main function which executes the level.
	It takes the question as string argument and its answers as list type
	argument. This function executes til the player has completed his
	level.
	'''
	i = 0
	while(i < len(answer)):

		blank = raw_input("What should go in blank " + str(i + 1) + " ? ")

		'''
		the conditions check if the word typed by the user is in the answer
		list .
		'''
		if(word_in_pos(blank , answer) != None and i == answer.index(blank)):

			# the following replaces the blank with the correct answer filled
			quiz_string = quiz_string.split()
            # j is used to store index from where the blank starts
			j = quiz_string.index("__" + str(i + 1) + "__")
			word = quiz_string[j]
			word = word.replace("__" + str(i + 1) + "__" , blank)
			quiz_string[j] = word

			# it now iterates to next blank
			i += 1
			print "\nThat's Correct!\n"
			quiz_string = " ".join(quiz_string)
			print quiz_string + "\n"

		else:
			print("\noopes! Wrong Answer. try again Please")

	print "Congratulations you won the level !!\n"
	return


def word_in_pos(word, answers):

	'''
	It checks if a word filled by the player is present in the answer
	list or not. It returns the word itself.
	'''

	for pos in answers:
		if pos == word:
			return pos
	return None


def main():

	'''
	It is the main block or function of the game.
	'''

	play = "yes"


	while(play == "yes"):
                #23, 3 here are used just as a mutilier for the string
		print "\n" + " " * 23 + " hi Welcome to Reverse Mad-libs !!"
		print "\nPress \n 1 for starter \n 2 for intermediate \n 3 for\
 trained\n 4 for experienced \n 5 for expert"

		level = raw_input("\nEnter your Choice : ")

		level_Selector(level)

		play = raw_input("Do You want to play again ? (yes/no) ")
		if(play == "no"):
			print "ThankYou for playing :)"

def level_Selector(level):
    # this will return the starter level
    if(level == '1'):
        print stringstarter + "\n"
        run(starter_answer, stringstarter)

    # this will return the intermediate level
    elif(level == '2'):
        print stringIntermediate + "\n"
        run(intermediate_answer, stringIntermediate)

    # this will return the trained level
    elif(level == "3"):
        print stringtrained + "\n"
        run(trained_answer, stringtrained)

    # this will return the experienced level
    elif(level == "4"):
        print stringExperienced + "\n"
        run(experienced_answer, stringExperienced)

    # this will return the expert level
    elif(level == "5"):
        print stringExpert + "\n"
        run(expert_answer, stringExpert)

    else:
        level = raw_input("\nSorry Wrong choice! Please type in your Expertise Level : ")
        level_Selector(level)


if __name__ == "__main__":
        main()
