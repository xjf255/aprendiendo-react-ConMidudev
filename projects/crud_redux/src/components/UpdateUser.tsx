import { Button, Card, TextInput, Title } from "@tremor/react";
import { toast } from "sonner";
import { useUserActions } from "../hooks/useUserActions";
import { UserId } from "../store/users/slice";

export function UpdateUser() {
	const { modificationUser } = useUserActions();
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const form = event.target;
		const formData = new FormData(form);

		const id = formData.get("id") as UserId;
		const name = formData.get("name") as string;
		const email = formData.get("email") as string;
		const github = formData.get("git") as string;

		if (!id || !name || !email || !github) {
			toast.error("Todos los campos son requeridos");
			return;
		}

		modificationUser({ id, name, email, github });
		toast.success(`id ${id} actualizado exitosamente `);
		form.reset();
	};
	return (
		<Card>
			<form onSubmit={handleSubmit}>
				<Title style={{ marginBottom: "20px" }}>Modificar usuario</Title>

				<TextInput placeholder="Id" name="id" />
				<TextInput placeholder="Ingrese el nombre" name="name" />
				<TextInput placeholder="Ingrese el correo" name="email" />
				<TextInput placeholder="Ingrese el github" name="git" />
				<div>
					<Button type="submit" style={{ marginTop: "16px", width: "auto" }}>
						Modificar Usuario
					</Button>
					{/* <span>
        {result === 'ko' && <Badge style={{color:'red'}}>Error con los campos</Badge>}
        {result === 'ok' && <Badge style={{color:'green'}}>Guardado correctamente</Badge>}
      </span> */}
				</div>
			</form>
		</Card>
	);
}
