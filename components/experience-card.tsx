import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface ExperienceCardProps {
  company: string
  position: string
  period: string
  description: string
  achievements: string[]
}

export default function ExperienceCard({ company, position, period, description, achievements }: ExperienceCardProps) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
          <div>
            <h3 className="text-xl font-bold">{position}</h3>
            <p className="text-primary font-medium">{company}</p>
          </div>
          <p className="text-sm text-muted-foreground">{period}</p>
        </div>
      </CardHeader>
      <CardContent>
        <p className="mb-4">{description}</p>
        <div>
          <h4 className="font-semibold mb-2">Key Achievements:</h4>
          <ul className="list-disc pl-5 space-y-1">
            {achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
