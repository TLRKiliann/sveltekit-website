type Articles = {
	id: string;
	article: string;
}

export const articles: Articles = [
	{
		"id": 1,
		"article": "The latest Ryzen 5 processors also look competitive here, but \n"+
		"it still costs more to assemble a socket AM5 PC. A decent AM5 motherboard \n"+
		"with built-in Wi-Fi and Bluetooth, the MSI Pro B650M-A Wi-Fi, currently \n"+
		"runs $153, compared to $100 for a Gigabyte B660M DS3H AX. A 16GB kit of \n"+
		"DDR5-5200 costs $59 (AMD says DDR5-6000 is the ideal speed, and it's what \n"+
		"we use for testing; you'll pay $33 more for the extra bump) compared to about \n"+
		"$34 for a kit of DDR4-3200.",
		"secondarticle": "At current pricing, that adds up to around $100 extra, \n"+
		"giving you a small boost to gaming performance in some situations but mostly \n"+
		"breaking even in non-gaming tasks. In a budget build, that money might be better \n"+
		"spent on a bigger SSD, better power supply, or faster GPU.",
		"thirdarticle": "That said, Intel's LGA1700 socket is likely nearing the end of \n"+
		"the line, and AM5 will be supported until at least 2025. If you're the kind of \n"+
		"person who upgrades CPUs every couple of years, you can spend a little more now \n"+
		"and maybe save some money later when it's time to step up to (an entirely \n"+
		"theoretical) Ryzen 5 9600. I'd still go with the Intel build in this price range, \n"+
		"but there's a good argument to be made either way."

	},
	{
		"id": 2,
		"article": "If you're wondering what all those letters at the end of each \n"+
		"processor mean, here's a quick breakdown. To start, the Core i7 and Core i9 \n"+
		"lines (in the mainstream desktop and mobile families) come with integrated \n"+
		"graphics processors (IGPs), though Intel also offers isolated models without \n"+
		"IGPs. Those without IGPs are denoted with an <F> suffix. (The whole Core \n"+
		"X-Series has never offered IGPs on the chips and are the <F> exception; \n"+
		"they all end in <X> or <XE>. You need to use these chips with a video card, full stop.)",
		"secondarticle": "Non-F chips from the 11th generation will offer IGPs—though \n"+
		"anyone serious about gaming will pair the CPU with a discrete graphics card to \n"+
		"get the most out of their chip purchase. That applies to both desktop and \n"+
		"laptop gamers are mainstream desktop chips that carry a <T> on the end of the \n"+
		"model number. These represent what Intel calls its <power-optimized> line of \n"+
		"CPUs that run at lower wattages for smaller or thermally constrained PCs. \n"+
		"Then there's <K>: That letter in any of the chip models means that its cores \n"+
		"are unlocked for overclocking. <K>, <KF>, <KS> desktop chips, or <HK> mobile ones, \n"+
		"can be overclocked as you see fit.",
		"thirdarticle": "Together, the Core i7 and the Core i9 represent the top of \n"+
		"Intel's consumer-grade CPU stack, and at least for pure frame-rate-oriented \n"+
		"gaming and single-threaded applications, both still prevail over AMD's \n"+
		"equivalent cost-comparative offerings. AMD's offerings tend to win when all \n"+
		"cores come into play, because AMD's Ryzen CPUs of the same price tend to offer \n"+
		"more accessible cores and threads for the money."
	},
	{
		"id": 3,
		"article": "It must really hurt to be AMD, sometimes. Team Red has been the \n"+
		"underdog since its inception in the late 1960s, formed by employees leaving \n"+
		"the then-titanic Fairchild Semiconductor firm - just one year after Intel was \n"+
		"established in the exact same way.",
		"secondarticle": "Intel had the drop on AMD, and for decades the company in \n"+
		"the red corner was beholden to Intel’s will - as a second-source manufacturer, \n"+
		"it spent less time making its own components and more time producing patented \n"+
		"products for Team Blue. It wasn’t really until the turn of the century that AMD \n"+
		"was able to properly kick out, finally managing to secure a chunk of the \n"+
		"dedicated CPU market and expanding from there with the product lines we know and \n"+
		"love today: Athlon, Bulldozer, and later Ryzen.",
		"thirdarticle": "The recent launch of AMD’s new ‘Zen 4’ CPUs looked like it \n"+
		"could be a turning point for the dark horse of the microprocessor market. We \n"+
		"gave five-star reviews to both the Ryzen 9 7950X and the incredible mainstream \n"+
		"Ryzen 7 7700X - generational performance was through the roof, blowing Intel’s \n"+
		"current 12th-generation chips out of the water."
	},

];